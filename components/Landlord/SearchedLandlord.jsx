import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsChevronDoubleLeft, BsChevronDoubleRight, BsArrowRepeat } from "react-icons/bs";
import { Button, Card} from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import dayjs from 'dayjs';
import { useStateContext } from "../../context/StateContext";
import { useStaticContext } from '../../context/StaticContext';

const SearchedLandlord = () => {
    const [index, setIndex] = useState(0)
    const { currentCustomer, filteredLandlordByDesc, ifLandlordMatched, getMatchedLandlords, unique_internal } = useStateContext()
    const { internalCityTables } = useStaticContext()
    
    const previous = () => {
        if (index === 0) {
            return;
        }
        setIndex(index - 1)
    }

    const next = () => {
        if (index >= filteredLandlordByDesc.length - 1) {
            return;
        }
        setIndex(index + 1)
    }

    const handleSubmit = async() => {
        const landlord = filteredLandlordByDesc[index]

        const vars = {
            "index": landlord.index,
            "listingCity": landlord.listingCity,
            "listing_rent_date": dayjs(landlord.listing_rent_date).format('YYYY-MM-DD'),
            "listing_rent_price": landlord.listing_rent_price,
            "listing_room_type": landlord.listing_room_type,
            "listing_describe": landlord.listing_describe,
            "listingTel": landlord.listingTel,
            "listingUrl": landlord.listingUrl,
            "listingAdd": landlord.listingAdd,
            "UserId": currentCustomer.UserId,
            "mail": currentCustomer.mail,
            "name": currentCustomer.姓 + currentCustomer.名 + "|" + currentCustomer.wechat_name,
            "wechat_name": currentCustomer.wechat_name,
            "listing_developer": landlord.listing_developer,
            "customer_assistant_name": currentCustomer.Assistant_name,
            "customer_gender": currentCustomer.gender,
            "customer_budget_price": currentCustomer.Buget_price,
            "customer_rent_date": currentCustomer.rent_date,
            "Rent_note": landlord.Rent_note,
            "Internal_Notes": landlord.Internal_Notes,
            "datatime": dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss')
        }

        const reqBody = {
            table: internalCityTables[landlord.listingCity],
            values: vars
        }
        
        const response = await fetch(`/api/landlords`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reqBody)
        })

        if (response.status === 200){
            const data = await response.json()
            if (!data.error) {
                toast.success("Successfully inserted the developed landlords to the internal database!")
                getMatchedLandlords(internalCityTables, true)
            } else {
                toast.error(`Failed to insert the developed landlords to the internal database. Please contact the technical team or try agian later.`)
            }
        } else {
            toast.error(`Failed to insert the developed landlords to the internal database on the server side. Please contact the technical team or try again later.`)
        }
    }

    useEffect(() => {
        if (currentCustomer) {
           
        }
    }, [currentCustomer]);

    return (
        <>
        { filteredLandlordByDesc.length > 0 &&
            <div>
                <div className="title title-with-object">
                    <h5>
                        {'landlord result'}
                    </h5>
                    <div className="page-nav">
                        <Button variant="outline-success" size="sm" className="list-nav-button" onClick={previous}>
                            <BsChevronDoubleLeft />
                        </Button>
                        <h6>
                            {`${index+1} / ${filteredLandlordByDesc.length}`}
                        </h6>
                        <Button variant="outline-success" size="sm" className="list-nav-button" onClick={next}>
                            <BsChevronDoubleRight />
                        </Button>
                    </div>
                </div>
                
                <div className="landlord-list-container">
                    <div className='landlord-display-container'>
                        <Card className='landlord-list-item'>
                            <Card.Body>
                                <Card.Title>Rent date</Card.Title>
                                <Card.Text>{dayjs(filteredLandlordByDesc[index].listing_rent_date).format('YYYY-MM-DD')}</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='landlord-list-item'>
                            <Card.Body>
                                <Card.Title>Listing Address</Card.Title>
                                <Card.Text>{filteredLandlordByDesc[index].listingAdd}</Card.Text>
                            </Card.Body>
                            </Card>
                            <Card className='landlord-list-item'>
                            <Card.Body>
                                <Card.Title>Listing Address</Card.Title>
                                <Card.Text>{filteredLandlordByDesc[index].listing_describe}</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='landlord-list-item'>
                            <Card.Body>
                                <Card.Title>Listing Price</Card.Title>
                                <Card.Text>{filteredLandlordByDesc[index].listing_rent_price}</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='landlord-list-item'>
                            <Card.Body>
                                <Card.Title>Phone</Card.Title>
                                <Card.Text>{filteredLandlordByDesc[index].listingTel}</Card.Text>
                            </Card.Body>
                        </Card>
                        {filteredLandlordByDesc[index].listingUrl && 
                        <Card className='landlord-list-item'>
                            <Card.Body>
                                <Card.Title>Listing link</Card.Title>
                                <Card.Text>
                                    <Link href={filteredLandlordByDesc[index].listingUrl} target = "_blank">Click to go to the page</Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        }
                    </div>
                    { !ifLandlordMatched(filteredLandlordByDesc[index]) &&
                        <div className="submit-button-block">
                            <Button variant="success" className="submit-button" onClick={handleSubmit}>Match</Button>
                        </div>
                    }
                </div>
            </div>
        }
        </>
    )
}

export default SearchedLandlord;