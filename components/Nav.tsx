import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { github, linkedin } from '@/public';

interface NavProps {
  scrollTarget: string;
}

const emailAdr = 'tieuvanhien01@gmail.com';

export const Nav: React.FC<NavProps> = () => {
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
          src="https://techstack01.s3.us-west-2.amazonaws.com/logo.svg"
          alt="logo"
          className="w-40"
          width={100}
          height={50}
        />
      </div>
      <div className="contact-icon flex justify-center items-center mr-8">
        <Link
          className="icon flex justify-center"
          href="https://www.linkedin.com/in/van-hien-tieu-4532041b7/"
          target="_blank"
        >
          {/* <Image src={linkedin} alt="icon" /> */}
        </Link>
        <Link
          className="icon flex justify-center"
          href="https://github.com/TieuVanHien"
          target="_blank"
        >
          <Image src={github} alt="github icon" />
        </Link>
        <Link className="icon" href={`mailto:${emailAdr}`}>
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <polyline points="8 10 12 14 16 10" />
            </svg>
          </>
        </Link>
      </div>
    </nav>
  );
};
