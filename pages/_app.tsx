import React from 'react';
import { Layout } from '@/components';
import '@/styles/globals.scss';
import Head from 'next/head';

interface AppProps {
  Component: React.ComponentType<any>;
  pageProps: any;
}

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
