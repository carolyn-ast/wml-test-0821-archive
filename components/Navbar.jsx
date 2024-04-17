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
  const { setShowProfile, setGenerateLinkPage } = useStateContext()

  return (
    <div className="navbar-container">
      <h4 className="logo">
        {/* <Link id="brand" href="/"> Linli Customers Management</Link> */}
        <br></br>
        <br></br>
        <Link id="newLandlord" href="https://form.jotform.com/223617028061045" target="_blank" style={{ color: 'white', textDecoration: 'none' }}
  onMouseEnter={(e) => e.target.style.color = 'blue'}
  onMouseLeave={(e) => e.target.style.color = 'white'}>Add listing</Link>
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
              <Dropdown.Item eventKey='genarate-link' onClick={()=>setGenerateLinkPage(true)}>Genarate Link</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <SearchBar />
        </div>
      
    </div>
  )
}

export default Navbar;