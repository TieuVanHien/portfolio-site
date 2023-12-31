import React from 'react';
import { TypingComponent } from './Typing';

export const Home = () => {
  return (
    <section id="home" className="home">
      <div className="container">
        <div className="right flex justify-center items-center ">
          <div className="card font-mono flex-col flex justify-between text-2xl">
            <div className="text">
              <h1>Welcome to my portfolio site!</h1>
              <TypingComponent />
            </div>
            <div className="info flex justify-end text-lg">
              <button className="button">Let&#39;s Connect</button>
            </div>
          </div>
        </div>
        <div className="left"></div>
      </div>
    </section>
  );
};
