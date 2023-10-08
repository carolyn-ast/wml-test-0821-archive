import React, { useState } from 'react';
import { BsSearch } from "react-icons/bs";
import Dropdown from 'react-bootstrap/Dropdown';
import { useStateContext } from '../context/StateContext';
import {
    signIn,
    useSession,
    getSession
} from 'next-auth/react';
import { useStaticContext } from '../context/StaticContext';
const SearchLandlordButton = () => {
    //const { data: session } = useSession()
    const {users } = useStaticContext()
    const current_user = users["chtecdev200@gmail.com"]
    //const current_user =users[session.user.email]
    const { getLandlordsByUser, landlordByUser, setFilteredLandlordByDesc } = useStateContext()
    //get landlord list by current user
    getLandlordsByUser(current_user)
    
   const [searchBarKeyCode, setSearchBarKeyCode]= useState('13')
    
    const onkeydownSearchDesc = (e) => {
        //setTextInput(e.target.value)
        setFilteredLandlordByDesc('')
        var code = e.keyCode || e.which || e.charCode;
        if (code == searchBarKeyCode ) {
            const searchByDesc = landlordByUser.filter((lan) => lan.listing_describe.includes(e.target.value))
            setFilteredLandlordByDesc(searchByDesc)
        }
    }
    
    return (
    <div className="search-bar-container">
    <Dropdown className="d-inline mx-2" autoClose="outside">
        <Dropdown.Toggle id="dropdown-autoclose-outside">
        Search Landlord
        </Dropdown.Toggle>
      <Dropdown.Menu >
        <Dropdown.Item href="#">
        <BsSearch color="white"/>
            <input 
                type='text'
                //value={textInput}
                className="search-input-bar"
                name="search-bar-id"
                placeholder="search by description"
               // onChange={handleChangeSearchById}
                onKeyDown={onkeydownSearchDesc}
            />
        </Dropdown.Item> 
      </Dropdown.Menu>
    </Dropdown>
    </div>
    )
  };
  
  export default SearchLandlordButton;