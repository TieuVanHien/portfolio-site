import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Nav = () => {
  return (
    <nav className="flex justify-between align-center">
      <div className="logo">
        <Image
          src="https://portfolio-site01.s3.us-west-2.amazonaws.com/logo.png"
          alt="logo"
          className="w-40"
          width={100}
          height={50}
        />
      </div>
      <div className="link flex justify-between w-64 items-center">
        <Link href="/" className="text-white">
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
