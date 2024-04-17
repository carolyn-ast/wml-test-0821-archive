import React, { useState, useEffect } from 'react';
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
    const [searchBarKeyCode, setSearchBarKeyCode]= useState('13')
    //const current_user =users[session.user.email]
    const { getLandlordsByUser, landlordByUser, allLandlordByUser, setFilteredLandlordByDesc } = useStateContext()
    //get landlord list by current user
    //getLandlordsByUser('')
    useEffect(() => {
        // This will run once when the component mounts
        getLandlordsByUser('');
    }, []);
    
    const onkeydownSearchDesc = (e) => {
        //setTextInput(e.target.value)
        setFilteredLandlordByDesc('')
        var code = e.keyCode || e.which || e.charCode;
        if (code == searchBarKeyCode ) {
            const searchByDesc = allLandlordByUser.filter((lan) => lan.listingDescribe.includes(e.target.value))
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