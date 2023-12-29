import React from 'react';
import { Typing } from '@/components/Typing';

export const Home = () => {
  return (
    <section id="home" className="home">
      <div className="container">
        <div className="right flex justify-center items-center ">
          <div className="card font-mono flex-col flex justify-between text-2xl">
            <div className="text">
              <h1>Welcome to my portfolio site!</h1>
              <Typing className="text-2xl" text="Feel free to reach me =))" />
            </div>
          </div>
        </div>
        <div className="left"></div>
      </div>
    </section>
  );
};
