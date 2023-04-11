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
        <title>Van Hien Tieu | Software Developer</title>
      </Head>
      <Nav />
      <main className="main">{children}</main>
    </section>
  );
};
