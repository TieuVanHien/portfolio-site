import React, { ReactNode } from 'react';
import Head from 'next/head';
import { Nav } from './Nav';
import { motion, Variants, LazyMotion, domAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const introHeaderVariants: Variants = {
    hide: {
      opacity: 0,
      x: -500
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 2
      }
    }
  };

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0
  });

  return (
    <LazyMotion features={domAnimation}>
      <div className="layout">
        <Head>
          <title>Van Hien Tieu | Software Developer</title>
        </Head>
        <Nav scrollTarget="" />
        <div ref={ref}>
          <motion.main
            initial="hide"
            animate={inView ? 'show' : 'hide'}
            exit="hide"
            variants={introHeaderVariants}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01]
            }}
          >
            {children}
          </motion.main>
        </div>
      </div>
    </LazyMotion>
  );
};
