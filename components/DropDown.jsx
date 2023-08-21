import * as React from 'react';
import { useState, useEffect } from "react";

const DropDown = ({ options,name,value,label,onChange}) => {
     const [selectedValue, setSelectedValue] = useState(value)

    useEffect(() => {
        setSelectedValue(value)    
    },[value])

    return (
        <label className="customerDetail_dropDown_box" >
             {label}
            <select className="customerDetail_dropDown" name={name} onChange={onChange} value={selectedValue }>
           
            { Object.entries(options).map(([key, value]) =>{
                        return (<option 
                                key={key}
                                value={value}>
                                {value}
                                </option>)
                    })}
            </select>
        </label>

           );

}

export default DropDown;