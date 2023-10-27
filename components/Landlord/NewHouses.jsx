import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { BsChevronDoubleLeft, BsChevronDoubleRight, BsArrowRepeat } from "react-icons/bs";
import { Button, Card} from 'react-bootstrap';

import { useStateContext } from "../../context/StateContext";
import { useStaticContext } from '../../context/StaticContext';
import { LandlordStatus } from '..';

const NewHouses = () => {
    const [index, setIndex] = useState(0)
    const { currentCustomer, newHouses, getMatchedLandlords, handleLandlordUpdate, removeMatchedLandlords} = useStateContext()
    const { externalCityTables } =   useStaticContext()
    const [updateItems, setUpdateItems] = useState({})
    const statusSelection = {
        "Not Match": "信息不匹配",
        "Disagree": "房东不同意10天租金",
        "Agree - 10 Days": "房东同意10天租金"
    }

    const previous = () => {
        if (index === 0) {
            return;
        }
        setIndex(index - 1)
    }

    const next = () => {
        if (index >= newHouses.length - 1) {
            return;
        }
        setIndex(index + 1)
    }

    const handleUpdate = async() => {
        const landlord = newHouses[index]
        handleLandlordUpdate(externalCityTables[landlord.listingCity], updateItems, landlord, landlord.listingId)
        if ('result' in updateItems && updateItems.result === "Not Match") {
            console.log("remove")
            removeMatchedLandlords(externalCityTables[landlord.listingCity],landlord.listingUrl)
        }
        if ('result' in updateItems && updateItems.result === "Disagree") {
            // redirect and send request to landlord management app
        }
        if ('result' in updateItems && updateItems.result === "Agree - 10 Days") {
            // redirect and send request to landlord management app
        }
    }

    const handleOptionChange = (e) => {
        const { name } = e.target
        switch(name) {
            case "Not Match":
                setUpdateItems({
                    ...updateItems,
                    ['match_level']: name,
                    ['result']: 'Not Match'
                })
        
                break;
            case "Disagree":
                // also set contact_status to today
                setUpdateItems({
                    ...updateItems,
                    ['match_level']: 'Match',
                    ['result']: 'Disagree'
                })
                break;
            case "Agree - 10 Days":
                setUpdateItems({
                    ...updateItems,
                    ['match_level']: 'Match',
                    ['result']: 'Agree - 10 Days'
                })
                break;
            default:
                return
        }
        
    }

    useEffect(() => {
        if (currentCustomer) {
            getMatchedLandlords(externalCityTables, false)
            setIndex(0)
            setUpdateItems({})
        }
    }, [currentCustomer]);

     useEffect(() => {
        //console.log(updateItems)
    }, [updateItems]);

    return (
        <div>
            {currentCustomer &&
            <div className="module-container">
                <div className="title title-with-object">
                    <h4>
                        {"External Matched Landlords "}  
                        <Button 
                        variant="outline-success" 
                        size="sm" 
                        onClick={() => {
                            getMatchedLandlords(externalCityTables, false)
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
                            {`${index+1} / ${newHouses.length}`}
                        </h6>
                        <Button variant="outline-success" size="sm" className="list-nav-button" onClick={next}>
                            <BsChevronDoubleRight />
                        </Button>
                    </div>
                </div>
                {newHouses.length > 0 &&
                <div className="landlord-list-container">
                    <div className='landlord-display-container'>
                        <Card className='landlord-list-item'>
                            <Card.Body>
                                <Card.Title>Phone</Card.Title>
                                <Card.Text>{newHouses[index].listingTel}</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='landlord-list-item'>
                            <Card.Body>
                                <Card.Title>Listing link</Card.Title>
                                <Card.Text>
                                    <Link target = "_blank" href={newHouses[index].listingUrl}>Click to go to the page</Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="landlord-form-container">
                        <div className="landlord-form-item">
                            <h4>Status</h4>
                            <LandlordStatus selections={statusSelection} opt={newHouses[index].result ? newHouses[index].result : newHouses[index].match_level} handleChange={handleOptionChange} />
                        </div>
                    </div>
                    <div className="submit-button-block">
                        <Button variant="success" className="submit-button" onClick={handleUpdate}>Submit</Button>
                    </div>
                </div>
                }
                { newHouses.length === 0 && 
                <div>
                    <h4>To be developing</h4>
                </div>
                }
            </div>
            }
        </div>
    )
};

export default NewHouses;