import React, { ReactNode } from 'react';
import Head from 'next/head';
import { Nav } from './Nav';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <section className="layout">
      <Head>
        <title>Van Hien Tieu Dev</title>
      </Head>
      <Nav />
      <main className="container">{children}</main>
    </section>
  );
};
