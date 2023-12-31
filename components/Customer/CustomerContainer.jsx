import React, { useState, useEffect } from 'react';
import { BsThreeDots } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import { useStateContext } from '../../context/StateContext';
import { CustomerSection } from '..';//components/index.js

const CustomerContainer = ({ scrollToCustomerDetail }) => {
    const { filteredCustomersByID,filteredCustomersByEmail,filteredCustomersByWechat, customers, dayDifference ,prioritizing_cutsomer } = useStateContext()
    const [ isCollapsed, setIsCollapsed ] = useState(false)
    const [ currentCustomers, setCurrentCustomers ] = useState([])
    const [ inSevenCustomers, setInSevenCustomers ] = useState([])
    const [ beyondSevenCustomers, setBeyondSevenCustomers ] = useState([])

    const sortCustomers = () => {
        if (customers.length > 0) {
            const list1 = customers.filter((customer) => {
            //     const date1 = new Date()
            //     const date2 = new Date(customer.rent_date)
                
            //     const differenceInDays = dayDifference(date1, date2)
                if ( customer.rent_status !=='YES' && customer.rent_status !=='DELETED' && customer.rent_status !=='PENDING'&& customer.rent_duration === '长租1年'){
                    return customer
                }
            })
            //Display all customers whose rent status is not “YES” or 'PENDING' or “Deleted” with the order.
            const all_customer = prioritizing_cutsomer(list1).sort((a, b) => parseFloat(b.Budget_price) - parseFloat(a.Budget_price))
            
            setCurrentCustomers(all_customer)

            const list2 = customers.filter((customer) => {
                const date1 = new Date()
                const date2 = new Date(customer.rent_date)
                
                const differenceInDays = dayDifference(date1, date2)
                if (67 >= differenceInDays && differenceInDays > 60 && customer.rent_status!=='YES'&& customer.rent_status !=='DELETED'){
                    return customer
                }
            })

            setInSevenCustomers(list2)

            const list3 = customers.filter((customer) => {
                const date1 = new Date()
                const date2 = new Date(customer.rent_date)
                
                const differenceInDays = dayDifference(date1, date2)
                if (differenceInDays > 67 && customer.rent_status!=='YES'&& customer.rent_status !=='DELETED'){
                    return customer
                }
            })

            setBeyondSevenCustomers(list3)
        }
    }

    const toggle = () => {
        setIsCollapsed(!isCollapsed)
    }

    useEffect(() => {
        sortCustomers()
    }, [filteredCustomersByID,filteredCustomersByEmail,filteredCustomersByWechat, customers])

 
    return (
        <div className="module-container">
            <h4 className="title">Renters</h4>
            <div className="customer-container">
                <div >
                   
                    {!isCollapsed && filteredCustomersByID.length !== 0 && 
                        <div> 
                        <h5>By ID</h5>
                        <CustomerSection section="Search Result" customerList={filteredCustomersByID} scrollToCustomerDetail={scrollToCustomerDetail}/>
                        </div>
                    }
                </div>
                <div >
                   
                    {!isCollapsed && filteredCustomersByEmail.length !== 0 && 
                        <div>  
                         <h5>By Email</h5>
                        <CustomerSection section="Search Result" customerList={filteredCustomersByEmail} scrollToCustomerDetail={scrollToCustomerDetail}/>
                        </div>}
                </div>
                <div >
                    
                {!isCollapsed && filteredCustomersByWechat.length !== 0 && 
                    <div> 
                    <h5>By Wechat</h5>
                        <CustomerSection section="Search Result" customerList={filteredCustomersByWechat} scrollToCustomerDetail={scrollToCustomerDetail}/>
                        </div>
                    }
                </div>
                <div className="scroll-container">
                   
                        <div> 
                           <h5>Active Renters</h5>
                        { currentCustomers.length > 0 &&
                            <CustomerSection section='Renting In Progress' customerList={currentCustomers} scrollToCustomerDetail={scrollToCustomerDetail} />
                        }
                        { inSevenCustomers.lenght > 0 &&
                            <CustomerSection section="Rental in 7 Days" customerList={inSevenCustomers} scrollToCustomerDetail={scrollToCustomerDetail}/>
                        }
                        { beyondSevenCustomers.length > 0 &&
                         <CustomerSection section="Registered Future Rental Demand" customerList={beyondSevenCustomers} scrollToCustomerDetail={scrollToCustomerDetail}/>
                        }
                    </div>
                    
                </div>
                <Button variant="light" className="collapse-button" onClick={toggle}>
                    <BsThreeDots />
                </Button>
            </div>
        </div>
    )
};

export default CustomerContainer;