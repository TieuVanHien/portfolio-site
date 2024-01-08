import React from 'react';
import { TypingComponent } from './Typing';
import { RoboModel } from './Scene';

export const Home = () => {
  return (
    <section
      id="home"
      className="home pt-32 lg:flex-row mob:flex-col h-screen w-full lg:flex"
    >
      <div className="right h-1/2 w-full flex justify-center items-center lg:h-full lg:w-7/12 lg:flex lg:justify-start lg:items-center lg:pb-24">
        <div className="card h-72 flex flex-col justify-between lg:font-mono lg:flex-col lg:flex lg:justify-between lg:text-2xl">
          <div className="text ">
            <h1>Welcome to my portfolio site!</h1>
            <TypingComponent />
          </div>
          <div className="info flex justify-end lg:flex lg:justify-end lg:text-lg">
            <button className="button">Let&#39;s Connect</button>
          </div>
        </div>
      </div>
      <div className="left lg:w lg:flex lg:justify-center lg:pl-24">
        <RoboModel />
      </div>
    </section>
  );
};
