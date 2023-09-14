import React, { useState, useEffect, useRef} from 'react';
import Button from 'react-bootstrap/Button';

import { useStateContext } from '../../context/StateContext';
import { useStaticContext } from '../../context/StaticContext';
import InputField from '../InputField';
import Textarea from '../Textarea';
import DropDown from '../DropDown';
//import DatePicker from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";

const CustomerDetail = React.forwardRef(({scrollToCustomerDetail}, ref) => {
    const { currentCustomer, handleCustomerUpdate, handleMatchChange} = useStateContext()
    const { detailList,
        options_city,
        options_gender,
        options_rentType,
        options_BedroomNum,
        options_Kitchen,
        options_furniture,
        options_parking,
        options_underground,
        options_pet,
        options_houseType,
        options_status,
        options_tenantNum,
        options_rentDuration} = useStaticContext()
    const [customer, setCustomer] = useState(currentCustomer)
    const [updateItems, setUpdateItems] = useState({})
    const [startDate, setStartDate] = useState(new Date());
    const [postalCode, setPostalCode] = useState();
    //const [rentTime, setRentTime] = useState();

    

    const handleChange = (e) => {
        const { name, value } = e.target
        setUpdateItems({
            ...updateItems,
            [name]: value
        })

        setCustomer({
            ...customer,
            [name]: value
        })
    }

  
    useEffect(() => {  
        setCustomer(currentCustomer)
        setUpdateItems({})
        if (scrollToCustomerDetail) {
            ref.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [currentCustomer, scrollToCustomerDetail, ref]);

   
    return (
        <div ref={ref}>
            {customer && 
            <div className="module-container">
                    <h4 className="title">Customer's Detail</h4>
                    
                    <div className="detail-contanier">
                        {
                            Object.entries(detailList).map(([key, value]) =>
                                key === 'Submission_Date' || key === 'Last Update Date' || key === 'UserId' || key === 'Assistant_name' ?
                                    (<InputField
                                        type="text"
                                        value={customer[key]}
                                        placeholder={value}
                                        label={value}
                                        name={key}
                                        onChange={handleChange}
                                        key={key}
                                        readOnly='true'
                                    />) :
                                   
                                    key === 'Leasing_demand' || key === 'Assistant_message' ?
                                        (<Textarea
                                            label={value}
                                            name={key}
                                            placeholder={value}
                                            value={customer[key]}
                                            onChange={handleChange}
                                            
                                        ></Textarea>)
                                        :
                                            key === 'City' ?
                                            (
                                                <DropDown label={value} options={options_city} name={key} value={customer[key]} onChange={handleChange}></DropDown>
                                            )
                                            :
                                            key === 'gender' ?
                                            (
                                                <DropDown label={value} options={options_gender} name={key} value={customer[key]} onChange={handleChange}></DropDown>
                                            )
                                            :
                                            key === 'rent_type' ?
                                            (
                                                <DropDown label={value} options={options_rentType} name={key} value={customer[key]} onChange={handleChange}></DropDown>
                                            )
                                            :
                                            key === 'house_type' ?
                                            (
                                                <DropDown label={value} options={options_houseType} name={key} value={customer[key]} onChange={handleChange}></DropDown>
                                            )
                                            :
                                            key === '是否有宠物' ?
                                            (
                                                <DropDown label={value} options={options_pet} name={key} value={customer[key]} onChange={handleChange}></DropDown>
                                            )
                                            :
                                            key === 'Kitchen' ?
                                            (
                                                <DropDown label={value} options={options_Kitchen} name={key} value={customer[key]} onChange={handleChange}></DropDown>
                                            )
                                            :
                                            key === 'Furniture' ?
                                            (
                                                <DropDown label={value} options={options_furniture} name={key} value={customer[key]} onChange={handleChange}></DropDown>
                                            )
                                            :
                                            key === '车位' ?
                                            (
                                                <DropDown label={value} options={options_parking} name={key} value={customer[key]} onChange={handleChange}></DropDown>
                                            )
                                            : 
                                            key === 'semi_underground' ?
                                            (
                                                <DropDown label={value} options={options_underground} name={key} value={customer[key]} onChange={handleChange}></DropDown>
                                            )
                                            : 
                                            key === 'room_type' ?
                                            (
                                                <DropDown label={value} options={options_BedroomNum} name={key} value={customer[key]} onChange={handleChange}></DropDown>
                                            )
                                            : 
                                            key === 'rent_status' ?
                                            (
                                                <DropDown label={value} options={options_status} name={key} value={customer[key]} onChange={handleChange}></DropDown>
                                            )
                                            :
                                            key === '几人入住？' ?
                                            (
                                                <DropDown label={value} options={options_tenantNum} name={key} value={customer[key]} onChange={handleChange}></DropDown>
                                            )
                                            :
                                            key === 'rent_duration' ?
                                            (
                                                <DropDown label={value} options={options_rentDuration} name={key} value={customer[key]} onChange={handleChange}></DropDown>
                                            )
                                         
                                            :
                                        (<InputField
                                            type="text"
                                            value={customer[key]}
                                            placeholder={value}
                                            label={value}
                                            name={key}
                                            onChange={handleChange}
                                            key={key}
                                        />)
                            )
                        }
                        
                                             
                    
                    <div className="submit-button-block">
                            <Button variant="success" size="sm" className="submit-button" onClick={() => { handleCustomerUpdate(updateItems, customer); handleMatchChange(customer) }}>Update</Button>
                    </div>
                </div>
            </div>
            }
        </div>
    )
});

export default CustomerDetail;