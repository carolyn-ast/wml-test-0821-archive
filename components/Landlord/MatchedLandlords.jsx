import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsChevronDoubleLeft, BsChevronDoubleRight, BsArrowRepeat } from "react-icons/bs";
import { Button, Card} from 'react-bootstrap';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

import { useStateContext } from "../../context/StateContext";
import { useStaticContext } from '../../context/StaticContext';
import { LandlordStatus } from '..';

const MatchedLandlords = () => {
    const [index, setIndex] = useState(0)
    const [booktime, setBookTime] = useState();
    const { currentCustomer, matchedLandlords, getMatchedLandlords, handleLandlordUpdate, handleCustomerUpdate, removeMatchedLandlords } = useStateContext()
    const { internalCityTables } = useStaticContext()
    const [updateItems, setUpdateItems] = useState({})
    const [customerStatus, setCustomerStatus] = useState(false)

    // 请求下一条 could be removed, it is not updated in database
    const statusSelection = {
        "不匹配": "不匹配",
        "房源已经成交了": "房源已经成交了",
        "租客要求看房": "租客要求看房",
    }

    const simpleProcess = [
        "不匹配",
        "房源已经成交了",
        "租客要求看房"
    ]

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

    const handleUpdate = () => {
        const landlord = matchedLandlords[index]
        if (customerStatus) {
            // delete mathced landlord record
            removeMatchedLandlords(internalCityTables[landlord.listingCity])
            handleCustomerUpdate({'rent_status': 'YES'}, currentCustomer)
        } else {
            handleLandlordUpdate(internalCityTables[landlord.listingCity], updateItems, landlord, null)
        }
    }

    const handleOptionChange = (e) => {
        const {name} = e.target
        if (simpleProcess.includes(name)) {
            setUpdateItems({
                ...updateItems,
                ['note']: name
            })
        } else {
            setCustomerStatus(true)
        }
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
                        {"Internal Matched Landlords "}  
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
                                <Card.Title>Rent date</Card.Title>
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
                        {matchedLandlords[index].listingUrl && 
                        <Card className='landlord-list-item'>
                            <Card.Body>
                                <Card.Title>Listing link</Card.Title>
                                <Card.Text>
                                    <Link href={matchedLandlords[index].listingUrl} target ="_blank">Click to go to the page</Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        }
                    </div>
                    <div className="landlord-form-container">
                        <div className="landlord-form-item">
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
                        </div>
                        <div className="landlord-form-item">
                            <h4>Status</h4>
                            <LandlordStatus selections = {statusSelection} opt = {matchedLandlords[index].note ? matchedLandlords[index].note : currentCustomer.rent_status} handleChange ={handleOptionChange} />
                        </div>
                    </div>
                    <div className="submit-button-block">
                        <Button variant="success" className="submit-button" onClick={handleUpdate}>Submit</Button>
                    </div>
                </div>
                }
                { matchedLandlords.length === 0 && 
                <div>
                    <h4>No matched internal landlords</h4>
                </div>
                }
            </div>
            }
        </div>
    )
};

export default MatchedLandlords;