import React, { useEffect, useRef, useState } from 'react';
import {
    signIn,
    useSession,
    getSession
} from 'next-auth/react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-hot-toast';

import { CustomerContainer, CustomerDetail, Landlords, MatchedLandlords, NewHouses, InputField } from '../../components';
import excuteQuery from '../../lib/db';
import { useStateContext } from '../../context/StateContext';

const AssistantHome = ({ customerList, user, developers }) => {
    //const { data: session } = useSession()

    const { setCustomers, setFilteredCustomersByID,setFilteredCustomersByEmail,setFilteredCustomersByWechat, showProfile, setShowProfile, setDevelopers } = useStateContext()
    const customerDetailRef = useRef(null)
    const [scrollToCustomerDetail, setScrollToCustomerDetail] = useState(false)
    const [updateItems, setUpdateItems] = useState({})
    const [tempAssistant, setTempAssistant] = useState(user)
    const [assistant, setAssistant] = useState(user)

    const handleScrollToCustomerDetail = () => {
        setScrollToCustomerDetail(true)
    }

    const handleProfileClose = () => {
        setShowProfile(false)
        setTempAssistant(assistant)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setUpdateItems({
            ...updateItems, 
            [name]: value
        })
        setTempAssistant({
            ...tempAssistant, 
            [name]: value
        })
    }

    const handelUpdate = async() => {
        if (updateItems.length === 0) {
            return
        }
        
        const response = await fetch(`/api/assistant/${user.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({vals: updateItems})
        });
        
        if (response.status === 200){
            const data = await response.json()
            if (!data.error) {
                setAssistant({...assistant, ...updateItems})
                toast.success('Successfully updated your profile, refresh to see update in customer list.')
            } else {
                toast.error(`Failed to update your profile to the database. Error: (${data.error.code}), Please check the input or try agian later.`)
            }
        } else {
            toast.error(`Failed to update your profile on the server side. Error code: (${response.status}), Please try again later.`)
        }
        setUpdateItems({})
    }

    useEffect(() => {
       setCustomers(customerList)
        setFilteredCustomersByID([])
        setFilteredCustomersByEmail([])
        setFilteredCustomersByWechat([])
       setUpdateItems({})
       setDevelopers(developers)
    }, []);

    return (
        <>
            {/* {!session && <>
                <h1>You are not signed in</h1> <br/>
                <button onClick={signIn}>Sign in</button>
            </>
            }
            {session &&   */}
            <div>
                <Modal show={showProfile} onHide={handleProfileClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Carroll H's Profile</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="form-group">
                            <label className="form-label">Email
                                <input
                                    className="form-control no-outline"
                                    type="text"
                                    value="chtecdec200@gmail.com"
                                    readOnly
                                />
                            </label>
                        </div>
                        <InputField 
                            type="text"
                            value="猫咪头"
                            placeholder="Please input your wechat name"
                            label="Wechat Name"
                            name="wechat_name"
                            onChange={(e) => {
                                handleChange(e)
                            }}
                            key="wechat_name"
                        />
                        <InputField 
                            type="text"
                            value="Carroll"
                            placeholder="Please input your formal name"
                            label="Formal Name"
                            name="formal_name"
                            onChange={(e) => {
                                handleChange(e)
                            }}
                            key="formal_name"
                        />
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="success" size="sm" onClick={() => {
                        handelUpdate()
                    }}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal> 
                <div>
                    {customerList && 
                        <div>
                            <CustomerContainer scrollToCustomerDetail={handleScrollToCustomerDetail} /> 
                            <CustomerDetail ref={customerDetailRef} scrollToCustomerDetail={scrollToCustomerDetail} />
                            <MatchedLandlords />
                            <NewHouses />
                            <Landlords />
                        </div>
                    }
                    {!customerList &&
                        <div className='center'>
                            <h5>Data not available, please try agian</h5>
                        </div>
                    }
                </div>
            </div>
            {/* } */}
        </>
    )
};

export const getServerSideProps = async(context) => {
    //const session = await getSession(context);

    // if (!session) return {
    //     props: {}
    // }

    // try{
        const result = await excuteQuery({
            query: "SELECT * FROM UserForm WHERE Assistant_name = '猫咪头' AND 如下哪些方面需要我们的帮助？ LIKE '%我是租客%' AND Assistant_message NOT LIKE '#%' AND rent_status != 'YES'",
            values: []
        })

        const customers = JSON.parse(JSON.stringify(result))
    //console.log(customers)
//console.log(result)
    
        const developers_result = await excuteQuery({
            query: "SELECT name FROM assistant",
            values: []
        })
        //console.log(developers_result)
        

        const developers = JSON.parse(JSON.stringify(developers_result))
        return {
            props: { customerList: customers, developers: developers }
        }
    // } catch (err) {
    //     console.log(err.message)
    //     return {
    //         props: {}
    //     }
    // }
};

export default AssistantHome;