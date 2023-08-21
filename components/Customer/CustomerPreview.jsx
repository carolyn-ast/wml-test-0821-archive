import React from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

import { useStateContext } from '../../context/StateContext';

const CustomerPreview = ({ customer, scrollToCustomerDetail }) => {
    const { setCurrentCustomer } = useStateContext()

    return (
        <ListGroup className="preview-card" horizontal>
            <ListGroup.Item className="preview-item">
                {customer.wechat_name}
            </ListGroup.Item>
            <ListGroup.Item className="preview-item">
                {customer.mail}
            </ListGroup.Item>
            <ListGroup.Item>
                <Button 
                variant="outline-success" 
                onClick={() => { 
                    setCurrentCustomer(customer) 
                    scrollToCustomerDetail()
                }}>
                    Detail
                </Button>
            </ListGroup.Item>
        </ListGroup>
    )
};

export default CustomerPreview;