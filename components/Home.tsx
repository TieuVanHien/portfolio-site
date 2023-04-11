import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';

export const Home = () => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const fetchImageUrls = async () => {
      try {
        const response = await fetch(
          'https://a243qgfrmi.execute-api.us-east-1.amazonaws.com/default/fetchImage'
        );
        const { urls } = await response.json();
        setImageUrls(urls);
      } catch (error) {
        console.error(error);
      }
    };

    fetchImageUrls();
  }, []);
  return (
    <div className="card text-white font-mono text-xl">
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
      <div className="contact-icon">
        <Image src={imageUrls[0]} alt="" width={15} height={15} />
      </div>
    </div>
  );
};
