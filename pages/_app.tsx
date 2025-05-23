import React from 'react';
import { Layout } from '@/components';
import '@/styles/globals.scss';

interface AppProps {
  Component: React.ComponentType<any>;
  pageProps: any;
}

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
