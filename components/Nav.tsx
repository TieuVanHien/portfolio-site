import React from 'react';
import Image from 'next/image';

export const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <Image
          src="https://portfolio-site01.s3.us-west-2.amazonaws.com/logo.png"
          alt="logo"
          width={100}
          height={50}
        />
      </div>
      {/* other navigation links */}
    </nav>
  );
};
