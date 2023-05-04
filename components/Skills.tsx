import React from 'react';
import Image from 'next/image';
import { Typing } from '../components/Typing';
import { Data } from './imageData';

export const Skills = () => {
  return (
    <div id="skills" className="container flex-col justify-evenly">
      <Typing text="Some Of My Favourite Tech Stacks </>" />
      <div className="skills flex justify-center items-center  mt-8">
        {Data.map((skill, index) => (
          <Image
            key={index}
            src={skill.src}
            alt={skill.alt}
            className={skill.className}
            width={1}
            height={1}
          />
        ))}
      </div>
    </div>
  );
};
