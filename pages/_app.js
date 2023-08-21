import React from 'react';
import { Toaster } from 'react-hot-toast';
import { SessionProvider } from 'next-auth/react'

import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Layout } from '../components';
import { StateContext } from '../context/StateContext';
import { StaticContext } from '../context/StaticContext';

function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    //<SessionProvider session={session} basePath='/api/auth'>
      <StaticContext>
        <StateContext>
          <Layout>
            <Toaster />
            <Component {...pageProps} />
          </Layout>
        </StateContext>
      </StaticContext>
    //</SessionProvider>
  )
};

export default App;