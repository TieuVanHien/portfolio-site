import React from 'react';
import Image from 'next/image';
import { Data } from '@/data/imageData';

export const Skills = () => {
  return (
    <section
      id="skills"
      className="skills mt-8 flex flex-col justify-evenly h-auto lg:w-full lg:h-[90vh] lg:flex lg:flex-col lg:justify-start lg:items-center"
    >
      <div className="heading h-[20vh] flex justify-start items-center lg:h-[15vh] lg:w-full lg:mb-8 lg:flex lg:justify-start lg:items-center">
        <h1 className="text-2xl lg:text-4xl">Favourite Tech Stacks </h1>
        <div className="line w-2/5 ml-4 lg:w-1/4 lg:ml-4"></div>
      </div>
      <div className="tech h-auto w-full lg:h-screen lg:mt-0 lg:w-full lg:flex lg:justify-center lg:items-center">
        <div className="tech-container h-fit flex flex-wrap justify-evenly items-start w-full lg:w-full lg:flex-wrap lg:flex lg:justify-center lg:items-start">
          {Data.map((skill, index) => (
            <div
              key={index}
              className="tech-stack mb-4 w-20 h-20 flex justify-center lg:w-60 lg:h-16 lg:p-2 lg:m-2 lg:flex lg:justify-start lg:items-center"
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
                className={`${skill.className} lg:ml-4 `}
                width={40}
                height={40}
              />
              <h2 className="lg:ml-6 lg:block hidden">{skill.alt}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
