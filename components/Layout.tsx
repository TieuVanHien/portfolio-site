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
      </Head>
      <Nav scrollTarget="" />
      <div className="flex justify-center items-center">{children}</div>
    </div>
  );
};
