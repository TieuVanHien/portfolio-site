import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export const Home = () => {
  return (
    <div id="home" className="container">
      <div className="card text-white font-mono flex-col flex justify-between text-2xl">
        <div className="text">
          <h1>Welcome to my portfolio site!</h1>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString('Feel free to reach me =))')
                .changeDelay(5)
                .callFunction(() => {})
                .pauseFor(1000)
                .start();
            }}
          />
        </div>
        <div className="contact-icon flex justify-end mt-8">
          <Link
            href="https://www.linkedin.com/in/van-hien-tieu-4532041b7/"
            target="_blank"
          >
            <FontAwesomeIcon
              className="linkedin fa-2x mr-2"
              icon={faLinkedin}
            />
          </Link>
          <Link href="https://github.com/TieuVanHien" target="_blank">
            {' '}
            <FontAwesomeIcon className="github fa-2x" icon={faGithub} />
          </Link>
        </div>
      </div>
    </div>
  );
};
