import React, {useEffect, useState, useRef} from 'react';
import Form from 'react-bootstrap/Form';

import CustomerPreview from './CustomerPreview';
import Card from 'react-bootstrap/Card';
import { useStateContext } from '../../context/StateContext';


const CustomerSection = ({ section, customerList, scrollToCustomerDetail }) => {
    const { dayDifference, prioritizing_cutsomer } = useStateContext()
    const [filteredCustomers, setFilteredCustomers] = useState(customerList)


    const handleSelect = (e) => {
        const value = e.target.value
        if (value === "all") {
            setFilteredCustomers(customerList)
        } else if (value === "need_check") {
            const tempList = customerList.filter((customer) => {
                const date1 = new Date()
                const date2 = new Date(customer.Submission_Date)
                
                const differenceInDays = dayDifference(date1, date2)
                if (0 < differenceInDays && differenceInDays <= 2){
                    return customer
                }
            })
            setFilteredCustomers(tempList)
        } else if (value === "follow_up") {
            //order by price from high to low and then based on urgency: most urgent to least.

            const tempList_follow_up_sorted = prioritizing_cutsomer(customerList).sort((a, b) => parseFloat(b.Budget_price) - parseFloat(a.Budget_price))
            const tempList_follow_up = tempList_follow_up_sorted.filter((customer) => {
                // see all the internally matched customers who were taking actions one day before from the internal matched section showing under this category. 
                const date = dayDifference(new Date(customer.LastUpdateTime), new Date())
                if (0 < date && date <= 1 ){
                    return customer
                }
            })
            setFilteredCustomers(tempList_follow_up)

        } else if (value === "see_house") {
            //ordering results by the nearest rate date to later
            customerList.sort(function(a,b){
                return new Date(b.rent_date) - new Date(a.rent_date)
              })
            const tempList_see_house = customerList.filter((customer) =>
            {
                if (customer.rent_status==='看房客户') {
                    return customer
                }
            })
            setFilteredCustomers(tempList_see_house)

        } else if (value === "short_rent") {
            //order by price from high to low and then based on urgency: most urgent to least.
            const tempList_short_rent_sorted = prioritizing_cutsomer(customerList).sort((a, b) => parseFloat(b.Budget_price) - parseFloat(a.Budget_price))
            const tempList_short_rent =  tempList_short_rent_sorted.filter((customer) => {
                if (customer.rent_duration!=='长租1年') {
                    return customer
                }
            })
            setFilteredCustomers(tempList_short_rent)

        } else if (value === "pending") {
             //order by price from high to low and then based on urgency: most urgent to least.
             const tempList_pending_sorted = prioritizing_cutsomer(customerList).sort((a, b) => parseFloat(b.Budget_price) - parseFloat(a.Budget_price))
            const tempList_pending = tempList_pending_sorted.filter((customer) =>
            {
                if (customer.rent_status==='PENDING') {
                    return customer
                }
            })
            setFilteredCustomers(tempList_pending)
        }
    }

    // <option value="need_confirm">内部匹配待确认</option>
    // <option value="external">外部房源开发租客</option>
    // <option value="on_appointment">约看房</option>
    return (
        <Card>
            <Card.Body>
                <Card.Title className='title-with-object'>
                    {`${section} (${filteredCustomers.length})`}
                    {section === 'Current' && 
                        <Form.Select className="dropdown-select" size="sm" onChange={handleSelect}>
                            <option value="all">All</option>
                            <option value="need_check">需要录入和核对房源需求的租客</option>
                            <option value="follow_up">Yesterday Follow-up</option>
                            <option value="see_house">看房客户</option>
                            <option value="short_rent">Short-term rental</option>
                            <option value="pending">Pending</option>
                            
                        </Form.Select>
                    }
                </Card.Title>
                <div className='section-container'>
                    { 
                        customerList.filter(customer1 =>
                            filteredCustomers.some(customer2 => customer2.UserId === customer1.UserId)
                        ).map((customer) =>
                            <CustomerPreview key={customer.UserId} customer={customer} scrollToCustomerDetail={scrollToCustomerDetail} />
                        )
                    }
                </div>
            </Card.Body>
        </Card>
    )
};

export default CustomerSection;