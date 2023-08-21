import React from 'react';
import Link from 'next/link';
import Dropdown from 'react-bootstrap/Dropdown';
import {
  signIn, 
  signOut,
  useSession
} from 'next-auth/react';
import { BsFillPersonFill } from "react-icons/bs";

import { SearchBar } from './';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  //const { data: session } = useSession()
  const { setShowProfile } = useStateContext()

  return (
    <div className="navbar-container">
      <h4 className="logo">
        <Link id="brand" href="/"> Linli Customers Management</Link>
      </h4>
      {/* {session && <div className='navbar-items'>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <BsFillPersonFill color="white"/>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey='edit-profile' onClick={()=>setShowProfile(true)}><>Edit profile</></Dropdown.Item>
              <Dropdown.Item eventKey='sign-out' onClick={signOut}>Sign out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <SearchBar />
        </div>
      } */}
            <div className='navbar-items'>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <BsFillPersonFill color="white"/>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey='edit-profile' onClick={()=>setShowProfile(true)}><>Edit profile</></Dropdown.Item>
              <Dropdown.Item eventKey='sign-out' onClick={signOut}>Sign out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <SearchBar />
        </div>
      
    </div>
  )
}

export default Navbar;