import React, { useEffect, useRef, useState } from 'react';
import {
    signIn,
    useSession,
    getSession
} from 'next-auth/react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-hot-toast';
import copy from 'clipboard-copy';
import { CustomerContainer, CustomerDetail, Landlords, MatchedLandlords, NewHouses, InputField } from '../../components';
import excuteQuery from '../../lib/db';
import { useStateContext } from '../../context/StateContext';

const AssistantHome = ({ customerList, user, developers }) => {
    //const { data: session } = useSession()

        const { setCustomers, setFilteredCustomersByID,setFilteredCustomersByEmail,setFilteredCustomersByWechat, showProfile, setShowProfile, setDevelopers, generateLinkPage, setGenerateLinkPage,copied, setCopied} = useStateContext()
    const customerDetailRef = useRef(null)
    const [scrollToCustomerDetail, setScrollToCustomerDetail] = useState(false)
    const [updateItems, setUpdateItems] = useState({})
    const [tempAssistant, setTempAssistant] = useState(user)
    const [assistant, setAssistant] = useState(user)
    const [companyName, setCompanyName] = useState('');
    const [referralPeople, setReferralPeople] = useState('');
    const [socialMedia, setSocialMedia] = useState('');
    const [referralCode, setReferralCode] = useState('');
    const [rentalRequirementLink, setRentalRequirementLink] = useState('');
 
    const handleScrollToCustomerDetail = () => {
        setScrollToCustomerDetail(true)
    }

    const handleProfileClose = () => {
        setShowProfile(false)
        // setTempAssistant(tempAssistant)
    }

    const handleLinkPageClose = () => {
        setGenerateLinkPage(false)
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

    // const copyToClipboard = () => {
    //     navigator.clipboard.writeText(rentalRequirementLink);
    //     setCopied(true);
    // };
   
const copyToClipboard = () => {
    copy(rentalRequirementLink)
      .then(() => {
        // 复制成功后的逻辑
        console.log('Link copied to clipboard');
        setCopied(true);
      })
      .catch((error) => {
        // 复制失败后的逻辑
        console.error('Failed to copy link to clipboard:', error);
      });
};

    const generateLink = () => {
        //测试版本没有session
        // const link = `http://119.3.241.33:8006/?company=${companyName}&referralPeople=${referralPeople}&socialmedia=${socialMedia}&assistant=${session.user.email}&referralCode=${referralCode}`;

        const link = `http://119.3.241.33:8006/?company=${companyName}&referralPeople=${referralPeople}&socialmedia=${socialMedia}&assistant=‘’&referralCode=${referralCode}`;
        setRentalRequirementLink(link)
        setCopied(false);
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

<Modal show={generateLinkPage} onHide={handleLinkPageClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Generate Link</Modal.Title>
                    </Modal.Header>
                  
                    <Modal.Body>
                    <InputField 
    type="text"
    value={companyName}
    placeholder="Input your company name"
    label="Company Name"
    name="companyName"
    onChange={(e) => setCompanyName(e.target.value)}
/>

<InputField 
    type="text"
    value={referralPeople}
    placeholder="Input referral people"
    label="Referral People"
    name="referralPeople"
    onChange={(e) => setReferralPeople(e.target.value)}
/>

<InputField 
    type="text"
    value={socialMedia}
    placeholder="Input social media source"
    label="Social Media"
    name="socialMedia"
    onChange={(e) => setSocialMedia(e.target.value)}
/>

<InputField 
    type="text"
    value={referralCode}
    placeholder="Input your referral code"
    label="Referral Code"
    name="referralCode"
    onChange={(e) => setReferralCode(e.target.value)}
/>

</Modal.Body>

                    <Modal.Footer>
                      <Button variant="primary" size="sm" onClick={generateLink}>
        Generate Link
    </Button>
                    </Modal.Footer>
                    {rentalRequirementLink && (
                    <>
                    <p>The link for tenant requirement form:</p>
                        <p style={{ maxWidth: '100%', overflow: 'hidden', wordWrap: 'break-word',border: '1px solid blue', padding: '5px'}}>{rentalRequirementLink}</p>
                        <Button variant="outline-primary" size="sm" onClick={copyToClipboard}>
                            {copied ? 'The link is copied to your clipboard!' : 'click to copy the link'}
                        </Button>
                    </>
                )}
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
            query: "SELECT * FROM UserForm WHERE Assistant_name = '猫咪头' AND need_help_with LIKE '%我是租客%' AND Assistant_message NOT LIKE '#%'",
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