import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Nav = () => {
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
        <Link href="/home" className="text-white">
          Home
        </Link>
        <Link href="/" className="text-white">
          Project
        </Link>
        <Link href="/" className="text-white">
          Skills
        </Link>
        <Link href="/" className="text-white">
          Contact
        </Link>
      </div>
    </nav>
  );
};
