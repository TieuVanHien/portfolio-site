import React, { ReactNode } from 'react';
import Head from 'next/head';
import { Nav } from './Nav';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <Head>
        <title>Van Hien Tieu | Software Developer</title>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" type="image/png" href="/myfavicon.png" />
          <link rel="shortcut icon" href="myfavicon.ico" type="image/x-icon" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/myfavicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/myfavicon-16x16.png"/>
          <link rel="manifest" href="/site.webmanifest"/>
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
          <meta name="msapplication-TileColor" content="#da532c"/>
          <meta name="theme-color" content="#ffffff"/>
      </Head>
      <Nav scrollTarget="" />
      {children}
    </div>
  );
};
