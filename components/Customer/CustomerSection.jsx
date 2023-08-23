import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';

import CustomerPreview from './CustomerPreview';
import Card from 'react-bootstrap/Card';
import { useStateContext } from '../../context/StateContext';

const CustomerSection = ({ section, customerList, scrollToCustomerDetail }) => {
    const { dayDifference } = useStateContext()

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
        } else if (value ==="follow_up" ) {
            
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