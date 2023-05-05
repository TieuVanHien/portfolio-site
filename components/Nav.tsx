import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

interface NavProps {
  scrollTarget: string;
}

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
          href="https://www.linkedin.com/in/van-hien-tieu-4532041b7/"
          target="_blank"
        >
          <FontAwesomeIcon className="linkedin fa-2x mr-2" icon={faLinkedin} />
        </Link>
        <Link href="https://github.com/TieuVanHien" target="_blank">
          <FontAwesomeIcon className="github fa-2x" icon={faGithub} />
        </Link>
      </div>
    </nav>
  );
};
