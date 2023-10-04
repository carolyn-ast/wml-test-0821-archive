import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { BsChevronDoubleLeft, BsChevronDoubleRight, BsArrowRepeat } from "react-icons/bs";
import { Button, Card} from 'react-bootstrap';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { timezoneFormatter } from '../../lib/timezone_utils';
import { useStateContext } from "../../context/StateContext";
import { useStaticContext } from '../../context/StaticContext';
import { LandlordStatus } from '..';

const MatchedLandlords = () => {
    const [index, setIndex] = useState(0)
    const [booktime, setBookTime] = useState();
    const { currentCustomer, matchedLandlords, getMatchedLandlords, handleLandlordUpdate, handleCustomerUpdate, removeMatchedLandlords } = useStateContext()
    const { internalCityTables } = useStaticContext()
    const [updateItems, setUpdateItems] = useState({})
    const [internalStatus, setinternalStatus] = useState()
    const status=useRef()
    const [customerStatus, setCustomerStatus] = useState(false)

    // 请求下一条 could be removed, it is not updated in database
    const statusSelection = {
        "不匹配": "不匹配",
        "房源已经成交了": "房源已经成交了",
        "租客要求看房": "租客要求看房",
        "房源已发客户":"房源已发客户"
    }
    
    const previous = () => {
        if (index === 0) {
            return;
        }
        setIndex(index - 1)
    }

    const next = () => {
        if (index >= matchedLandlords.length - 1) {
            return;
        }
        setIndex(index + 1)
    }

    const handleInternalMatchUpdate = () => {

        const landlord = matchedLandlords[index]
        // handleLandlordUpdate(internalCityTables[landlord.listingCity], 
        // else if (landlord.note === '不匹配' || landlord.note === '房源已经成交了') {
        //     removeMatchedLandlords (internalCityTables[landlord.listingCity])
        // }
        handleLandlordUpdate(internalCityTables[landlord.listingCity], updateItems, landlord, null).then(value => {
            if (value === '200') {
                if (internalStatus === '房源已发客户') {
                    console.log('已发')
                     //LIN-23 Once select this option and submitted, the record will be showing under” Yesterday Follow-up”.For records chosen “房源已发客户“ the days before yesterday, it will not show under “Yesterday Follow-up“, but will still show under “Current”
                    handleCustomerUpdate({
                        'LastUpdateTime': timezoneFormatter( dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss'))
                    }, currentCustomer)
                }
                else if (internalStatus === '租客要求看房') {
                    handleCustomerUpdate({ 'rent_status': '看房客户' }, currentCustomer)
                }
            }
        })
    }

    const handleOptionChange = (e) => {
        setinternalStatus(e.target.name)
        status.current=e.target.name
            setUpdateItems({
                ...updateItems,
                ['note']: e.target.name,
                ['LastUpdatetime']:timezoneFormatter( dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss'))
            })
    }

    useEffect(() => {
        if (currentCustomer) {
            getMatchedLandlords(internalCityTables, true)
            setIndex(0)
            setUpdateItems({})
        }
    }, [currentCustomer]);

    useEffect(() => {
        if (matchedLandlords.length > 0 && matchedLandlords[index].book_time) {
            setBookTime(dayjs(matchedLandlords[index].book_time))
        } else {
            setBookTime(dayjs(new Date()))
        }
     }, [index, matchedLandlords])
    
    return (
        <div>
            {currentCustomer &&
            <div className="module-container">
                <div className="title title-with-object">
                    <h4>
                        {"Matched Linli Landlords"}  
                        <Button 
                        variant="outline-success" 
                        size="sm" 
                        onClick={() => {
                            getMatchedLandlords(internalCityTables, true)
                            setIndex(0)
                            setUpdateItems({})
                        }}
                        >
                            <BsArrowRepeat />
                        </Button>
                    </h4>
                    <div className="page-nav">
                        <Button variant="outline-success" size="sm" className="list-nav-button" onClick={previous}>
                            <BsChevronDoubleLeft />
                        </Button>
                        <h6>
                            {`${index+1} / ${matchedLandlords.length}`}
                        </h6>
                        <Button variant="outline-success" size="sm" className="list-nav-button" onClick={next}>
                            <BsChevronDoubleRight />
                        </Button>
                    </div>
                </div>
                { matchedLandlords.length > 0 && 
                <div className="landlord-list-container">
                    <div className='landlord-display-container'>
                        <Card className='landlord-list-item'>
                            <Card.Body>
                                <Card.Title>Rent Date</Card.Title>
                                <Card.Text>{dayjs(matchedLandlords[index].listing_rent_date).format('YYYY-MM-DD')}</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='landlord-list-item'>
                            <Card.Body>
                                <Card.Title>Listing Address</Card.Title>
                                <Card.Text>{matchedLandlords[index].listingAdd}</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='landlord-list-item'>
                            <Card.Body>
                                <Card.Title>Listing Price</Card.Title>
                                <Card.Text>{matchedLandlords[index].listing_rent_price}</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='landlord-list-item'>
                            <Card.Body>
                                <Card.Title>Phone</Card.Title>
                                <Card.Text>{matchedLandlords[index].listingTel}</Card.Text>
                            </Card.Body>
                                </Card>
                                {matchedLandlords[index].Rent_note && 
                        <Card className='landlord-list-item'>
                            <Card.Body>
                                <Card.Title>Commission</Card.Title>
                                <Card.Text>NO</Card.Text>
                            </Card.Body>
                        </Card>
                        }  
                        {matchedLandlords[index].Rent_note && 
                        <Card className='landlord-list-item'>
                            <Card.Body>
                                <Card.Title>Commission Note</Card.Title>
                                <Card.Text>{matchedLandlords[index].Rent_note}</Card.Text>
                            </Card.Body>
                        </Card>
                        }
                              
                        {!matchedLandlords[index].Rent_note && 
                        <Card className='landlord-list-item'>
                            <Card.Body>
                                <Card.Title>Commission</Card.Title>
                                <Card.Text>YES</Card.Text>
                                        </Card.Body>
                                        
                        </Card>
                        }       
                        {!matchedLandlords[index].Rent_note && 
                        <Card className='landlord-list-item'>
                            <Card.Body>
                                <Card.Title>Commission Note</Card.Title>
                                <Card.Text>10 days rental as commission</Card.Text>
                                        </Card.Body>
                        </Card>
                        }         
                        {matchedLandlords[index].listingUrl && 
                        <Card className='landlord-list-item'>
                            <Card.Body>
                                <Card.Title>Listing Link</Card.Title>
                                <Card.Text>
                                    <Link href={matchedLandlords[index].listingUrl} target ="_blank">Click to go to the page</Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        }
                        {matchedLandlords[index].listing_describe && 
                        <Card className='landlord-list-item'>
                            <Card.Body>
                                <Card.Title>Listing Description</Card.Title>
                                <Card.Text>
                                {matchedLandlords[index].listing_describe}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        }
                        {matchedLandlords[index].LastUpdatetime && 
                        <Card className='landlord-list-item'>
                            <Card.Body>
                                <Card.Title>Last Update Time</Card.Title>
                                <Card.Text>{matchedLandlords[index].LastUpdatetime}</Card.Text>
                            </Card.Body>
                        </Card>
                        }
                        
                    </div>
                    <div className="landlord-form-container">
                        {/* <div className="landlord-form-item">
                            <h4>Last process time</h4>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateTimePicker 
                                    value={booktime}
                                    onChange={(newValue) => {
                                        setUpdateItems({
                                            ...updateItems,
                                            ['book_time']: newValue
                                        })
                                        setBookTime(newValue)
                                    }} 
                                />
                            </LocalizationProvider>
                        </div> */}
                        <div className="landlord-form-item">
                            <h4>Status</h4>
                            <LandlordStatus selections = {statusSelection} opt = {matchedLandlords[index].note ? matchedLandlords[index].note : ''} handleChange ={handleOptionChange} />
                        </div>
                    </div>
                    <div className="submit-button-block">
                        <Button variant="success" className="submit-button" onClick={handleInternalMatchUpdate}>Submit</Button>
                    </div>
                </div>
                }
                { matchedLandlords.length === 0 && 
                <div>
                    <h4>To be developing</h4>
                </div>
                }
            </div>
            }
        </div>
    )
};

export default MatchedLandlords;