import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

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
          className="icon flex justify-center items-center"
          href="https://www.linkedin.com/in/van-hien-tieu-4532041b7/"
          target="_blank"
        >
          <LinkedInIcon fontSize="large" />
        </Link>
        <Link
          className="icon flex justify-center items-center"
          href="https://github.com/TieuVanHien"
          target="_blank"
        >
          <GitHubIcon fontSize="large" />
        </Link>
        <Link
          className="icon flex justify-center items-center"
          href={`mailto:${emailAdr}`}
        >
          <EmailIcon fontSize="large" />
        </Link>
      </div>
    </nav>
  );
};
