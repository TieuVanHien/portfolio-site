import React from 'react';
import Image from 'next/image';
import { Data } from './imageData';

export const Skills = () => {
  return (
    <div id="skills" className="skills flex-col justify-start items-center">
      <div className="heading flex justify-start items-center">
        <h1>Favourite Tech Stacks </h1>
        <div className="line ml-4"></div>
      </div>
      <div className="tech-container flex justify-center items-center">
        {Data.map((skill, index) => (
          <div key={index} className="tech-stack">
            <Image
              src={require(`../assets/${skill.src}`).default}
              alt={skill.alt}
              className={skill.className}
              width={40}
              height={40}
            />
            <h2>{skill.alt}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};
