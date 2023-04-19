import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ScrollLink } from '../components/Scroll';

interface NavProps {
  scrollTarget: string;
}

export const Nav: React.FC<NavProps> = ({ scrollTarget }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollTo = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const element = document.querySelector(scrollTarget);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`nav flex justify-between align-center ${
        isScrolled ? 'shrink' : ''
      }`}
    >
      <div className="logo flex justify-center items-center">
        <Image
          src="https://portfolio-site01.s3.us-west-2.amazonaws.com/logo.png"
          alt="logo"
          className="w-40"
          width={100}
          height={50}
        />
      </div>
      <div className="link flex justify-between items-center mr-8">
        <ScrollLink href="#home" className="text-white" onClick={scrollTo}>
          Home
        </ScrollLink>
        <ScrollLink href="#skills" className="text-white" onClick={scrollTo}>
          Skills
        </ScrollLink>
        <ScrollLink href="#projects" className="text-white" onClick={scrollTo}>
          Project
        </ScrollLink>
        <ScrollLink href="/" className="text-white" onClick={scrollTo}>
          Contact
        </ScrollLink>
      </div>
    </nav>
  );
};
