import Head from 'next/head';
import React from 'react';
import {
  signIn, 
  signOut,
  useSession
} from 'next-auth/react';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';

const home = () => {
  
  //const { data: session } = useSession()

  return (
    <>
        {/* {!session && <>
            <h1>You are not signed in please click to sign in</h1> <br/>
            <Button variant="success" onClick={signIn}>Sign in</Button>
          </>
        } */}

        {/* {session && <>
          <h1>Signed in as {session.user.email} </h1> <br/>
          <h1>
            <Link href={`/Assistant/${session.user.name}`}>Click here to go to your dashboard</Link>
          </h1> <br />
          <Button variant="success" onClick={signOut}>Sign out</Button>
        </>} */}
      <h1>Signed in as chtecdec200@gmail.com </h1> <br/>
          <h1>
            <Link href={"/Assistant/Carroll H"}>Click here to go to your dashboard</Link>
          </h1> <br />
    </>
  )
}

export default home;
