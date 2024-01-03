import React from 'react';
import Image from 'next/image';
import { Data } from './imageData';

export const Skills = () => {
  return (
    <section
      id="skills"
      className="skills flex flex-col justify-start items-center"
    >
      <div className="heading mb-8 flex justify-start items-center">
        <h1>Favourite Tech Stacks </h1>
        <div className="line ml-4"></div>
      </div>
      <div className="tech flex justify-center items-center">
        <div className="tech-container flex justify-center items-start">
          {Data.map((skill, index) => (
            <div
              key={index}
              className="tech-stack"
              onMouseOver={(e) => {
                const targetImage = e.target as HTMLImageElement;
                if (targetImage) {
                  targetImage.style.fill = 'pink';
                }
              }}
            >
              <Image
                src={require(`../assets/${skill.src}`).default}
                alt={skill.alt}
                className={skill.className}
                width={40}
                height={40}
              />
              <h2 className="ml-4">{skill.alt}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
