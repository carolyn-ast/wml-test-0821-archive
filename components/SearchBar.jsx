import React, { useState } from 'react';
import { BsSearch } from "react-icons/bs";
import Dropdown from 'react-bootstrap/Dropdown';
import { useStateContext } from '../context/StateContext';

const SearchBar = () => {
    const { customers, setFilteredCustomersByID,setFilteredCustomersByEmail,setFilteredCustomersByWechat } = useStateContext()
    //const [textInput, setTextInput] = useState("")//为啥？
   const [searchBarKeyCode, setSearchBarKeyCode]= useState('13')
    
    const onkeydownSearchID = (e) => {
        //setTextInput(e.target.value)
        setFilteredCustomersByID('')
        var code = e.keyCode || e.which || e.charCode;
        if (code == searchBarKeyCode ) {
            const searchFilteredByID = customers.filter((customer) => customer.UserId=== e.target.value)
            //const searchFilteredByID = customers.filter((customer) => customer.UserId.includes(e.target.value))
            setFilteredCustomersByID(searchFilteredByID)
        }
    }
    
    const onkeydownSearchEmail = (e) => {
        //setTextInput(e.target.value)
        setFilteredCustomersByEmail('')
        var code = e.keyCode || e.which || e.charCode;
        if (code == searchBarKeyCode ) {
            const searchFilteredByEmail = customers.filter((customer) => customer.mail=== e.target.value)
           // const searchFilteredByEmail = customers.filter((customer) => customer.mail.includes(e.target.value) )
            setFilteredCustomersByEmail(searchFilteredByEmail)
        }
}
    const onkeydownSearchWechat = (e) => {
    //setTextInput(e.target.value)
    setFilteredCustomersByWechat('')
         var code = e.keyCode || e.which || e.charCode;
         if (code == searchBarKeyCode ) {
             const searchFilteredByWechat = customers.filter((customer) => customer.wechat_name === e.target.value)
             //const searchFilteredByWechat = customers.filter((customer) => customer.wechat_name.includes(e.target.value) )
             setFilteredCustomersByWechat(searchFilteredByWechat)
        }
    }
    
    // const handleChangeSearchById = (e) => {
    //     setTextInput(e.target.value)
    //     // if (textInput.length > 0) {
    //     //     const searchFilteredByID = customers.filter((customer) => customer.UserId === e.target.value )
    //     //     setFilteredCustomersByID(searchFilteredByID)
    //     // }
        
    // }
    // const handleChangeSearchByEmail = (e) => {
    //     setTextInput(e.target.value)
    //     if (textInput.length > 0) {
    //         const searchFilteredByEmail = customers.filter((customer) => customer.mail === e.target.value )
    //         setFilteredCustomersByEmail(searchFilteredByEmail)
    //     }
    // }
    // const handleChangeSearchByWechat = (e) => {
    //     setTextInput(e.target.value)
    //     if (textInput.length > 0) {
    //         const searchFilteredByWechat = customers.filter((customer) => customer.wechat_name === e.target.value )
    //         setFilteredCustomersByWechat(searchFilteredByWechat)
    //     }
    // }

    return (
        <div className="search-bar-container">

<Dropdown className="d-inline mx-2" autoClose="outside">
        <Dropdown.Toggle id="dropdown-autoclose-outside">
        Search Customer
      </Dropdown.Toggle>

      <Dropdown.Menu >
                    <Dropdown.Item href="#">
                    <BsSearch color="white"/>
            <input 
                type='text'
                //value={textInput}
                className="search-input-bar"
                name="search-bar-id"
                placeholder="search by user Id"
               // onChange={handleChangeSearchById}
                onKeyDown={onkeydownSearchID}
            />
        </Dropdown.Item>
                    <Dropdown.Item href="#">
                    <BsSearch color="white"/>
            <input 
                type='text'
                //value={textInput}
                className="search-input-bar"
                name="search-bar-email"
                placeholder="search by user email"
               // onChange={handleChangeSearchByEmail}
                onKeyDown={onkeydownSearchEmail}
            />
        </Dropdown.Item>
                    <Dropdown.Item href="#">
                    <BsSearch color="white"/>
            <input 
                type='text'
                //value={textInput}
                className="search-input-bar"
                name="search-bar-wechat"
                placeholder="search by wechat"
                //onChange={handleChangeSearchByWechat}
                onKeyDown={onkeydownSearchWechat}
            />
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>


        </div>
    )
  };
  
  export default SearchBar;