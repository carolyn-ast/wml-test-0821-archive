import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsChevronDoubleLeft, BsChevronDoubleRight, BsArrowRepeat } from "react-icons/bs";
import { Button, Card} from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import dayjs from 'dayjs';
import {
    signIn,
    useSession,
    getSession
} from 'next-auth/react';
import { useStateContext } from "../../context/StateContext";
import { useStaticContext } from '../../context/StaticContext';

const LandlordSection = ({ city }) => {
    //const { data: session } = useSession()
    const [index, setIndex] = useState(0)
    const { currentCustomer, ifLandlordMatched, getMatchedLandlords, unique_internal } = useStateContext()
    const { internalCityTables, users } = useStaticContext()
    const [landlordList, setLandlordList] = useState([])
    const current_user = users["chtecdev200@gmail.com"]
    //const current_user =users[session.user.email]
    
    const previous = () => {
        if (index === 0) {
            return;
        }
        setIndex(index - 1)
    }

    const next = () => {
        if (index >= landlordList.length - 1) {
            return;
        }
        setIndex(index + 1)
    }

    const handleSubmit = async() => {
        const landlord = landlordList[index]

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

    const getLandlords = async() => {
        const values = [ city ]
        
        const response = await fetch(`/api/landlords?citys=${values}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })

        if (response.status === 200){
            const data = await response.json()
            const landlordsData = JSON.parse(JSON.stringify(data))
            
            const landlord_by_user = landlordsData.filter((lan) => {
                if (lan.listing_developer.includes('carroll') || lan.listing_developer === { current_user }) {
                    return lan
                }
            })
            
            if (!data.error) {
                setLandlordList(unique_internal(landlord_by_user))
                setIndex(0)
            } else {
                toast.error(`Failed to fetch the developed landlords from the database. Please contact the technical team or try agian later.`)
            }
        } else {
            toast.error(`Failed to fetch the developed landlords from the server side. Please contact the technical team or try again later.`)
        }
    }

    const toInternalPage = () => {
        const idEnc = landlordList[index].listing_id ? btoa(landlordList[index].listing_id) : ''
        const equal = idEnc.match(/(=)/)
        const idUrl = equal ? idEnc.substring(0, equal.index) + equal.length : idEnc + '0'
        console.log(landlordList[index])
        window.open(
            'http://119.3.241.33:8004/showcase/' + idUrl,      
            '_blank' )  
    }

    useEffect(() => {
        if (currentCustomer) {
            getLandlords()
        }
    }, [currentCustomer]);

    return (
        <>
        { landlordList.length > 0 &&
            <div>
                <div className="title title-with-object">
                    <h5>
                        {`${city} `}
                        <Button variant="outline-success" size="sm" onClick={getLandlords}>
                            <BsArrowRepeat />
                        </Button>
                    </h5>
                    <div className="page-nav">
                        <Button variant="outline-success" size="sm" className="list-nav-button" onClick={previous}>
                            <BsChevronDoubleLeft />
                        </Button>
                        <h6>
                            {`${index+1} / ${landlordList.length}`}
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
                                <Card.Text>{dayjs(landlordList[index].listing_rent_date).format('YYYY-MM-DD')}</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='landlord-list-item'>
                            <Card.Body>
                                <Card.Title>Listing Address</Card.Title>
                                <Card.Text>{landlordList[index].listingAdd}</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='landlord-list-item'>
                            <Card.Body>
                                <Card.Title>Listing Price</Card.Title>
                                <Card.Text>{landlordList[index].listing_rent_price}</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='landlord-list-item'>
                            <Card.Body>
                                <Card.Title>Phone</Card.Title>
                                <Card.Text>{landlordList[index].listingTel}</Card.Text>
                            </Card.Body>
                        </Card>
                        {landlordList[index].listingUrl && 
                        <Card className='landlord-list-item'>
                            <Card.Body>
                                <Card.Title>Listing link</Card.Title>
                                <Card.Text>
                                    <Link href={landlordList[index].listingUrl} target = "_blank">Click to go to the page</Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                            }              
                        <Card className='landlord-list-item'>
                             <Card.Body>
                                <Card.Title>LINLI Internal Link</Card.Title>
                                <Card.Text>
                                <button className='internalLinkBTN' onClick={toInternalPage}>Go To The LINLI Internal Page</button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    { !ifLandlordMatched(landlordList[index]) &&
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

export default LandlordSection;