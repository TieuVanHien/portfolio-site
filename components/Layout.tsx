import React, { ReactNode } from 'react';
import Head from 'next/head';
import { Nav } from './Nav';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [ref, inView] = useInView({
    threshold: 0.1, // trigger animation when the component is 10% visible
    triggerOnce: true // only trigger the animation once
  });

  const introHeaderVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };

  return (
    <div className="layout">
      <Head>
        <title>Van Hien Tieu | Software Developer</title>
      </Head>
      <Nav scrollTarget="" />
      <motion.main
        ref={ref}
        variants={introHeaderVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {children}
      </motion.main>
    </div>
  );
};
