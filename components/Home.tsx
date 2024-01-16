import React from 'react';
import { TypingComponent } from './Typing';
import { RoboModel } from './Scene';

export const Home = () => {
  return (
    <section
      id="home"
      className="home pt-20 mb-12 flex flex-col-reverse justify-center items-center h-auto w-full lg:h-screen lg:flex-row lg:flex"
    >
      <div className="right p-4 h-45vh w-full flex justify-center items-start lg:h-full lg:w-7/12 lg:flex lg:justify-start lg:items-center lg:pb-24">
        <div className="card w-full p-8 h-full flex flex-col justify-between lg:p-8 lg:font-mono lg:h-3/5 lg:flex-col lg:flex lg:justify-between lg:text-2xl">
          <div>
            <h1 className="lg:text-3xl text-xl mb-4">
              Welcome to my portfolio site!
            </h1>
            <TypingComponent />
          </div>
          <div className="info flex justify-end lg:flex lg:justify-end lg:text-lg">
            <button className="button">Let&#39;s Connect</button>
          </div>
        </div>
      </div>
      <div className="left w-full h-45vh flex p-0 m-0 justify-center items-center lg:pt-12 lg:h-full lg:max-h-[85%] xl:max-h-[65%] lg:w-3/5 lg:flex lg:justify-center lg:items-center">
        <RoboModel />
      </div>
    </section>
  );
};
