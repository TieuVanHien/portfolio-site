import React from 'react';
import { Typing } from '../components/Typing';

export const Home = () => {
  return (
    <div id="home" className="container">
      <div className="card text-white font-mono flex-col flex justify-between text-2xl">
        <div className="text">
          <h1>Welcome to my portfolio site!</h1>
          <Typing className="text-2xl" text="Feel free to reach me =))" />
        </div>
      </div>
    </div>
  );
};
