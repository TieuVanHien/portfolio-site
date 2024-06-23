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
      className={`nav flex justify-between w-full h-20 items-center lg:h-24 lg:flex lg:w-full lg:justify-between lg:items-center ${
        isScrolled ? 'shrink' : ''
      }`}
    >
      <div className="logo flex justify-center items-center">
        <Image
          src="/logo.png"
          alt="logo"
          className="w-14 h-14 ml-4 lg:w-20 lg:h-20 lg:ml-6"
          width={90}
          height={40}
        />
      </div>
      <div className="contact-icon flex justify-center items-center lg:flex lg:justify-center lg:items-center lg:mr-8">
        <Link
          className="icon flex justify-center items-center"
          href="https://www.linkedin.com/in/van-hien-tieu-4532041b7/"
          target="_blank"
        >
          <LinkedInIcon fontSize="large" className="w-8 h-8" />
        </Link>
        <Link
          className="icon flex justify-center items-center"
          href="https://github.com/TieuVanHien"
          target="_blank"
        >
          <GitHubIcon fontSize="large" className="w-8 h-8" />
        </Link>
        <Link
          className="icon flex justify-center items-center"
          href={`mailto:${emailAdr}`}
        >
          <EmailIcon fontSize="large" className="w-8 h-8" />
        </Link>
      </div>
    </nav>
  );
};
