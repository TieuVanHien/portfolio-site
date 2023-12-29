import React from 'react';
import Image from 'next/image';
import { Data } from './imageData';
import { Grid } from './GridStyle';

export const Skills = () => {
  return (
    <div id="skills" className="container flex-col justify-evenly items-start">
      <h1>Some Of My Favourite Tech Stacks </h1>
      <div className="skills flex justify-center items-center">
        <Grid columns={7} rows={2} columnGap={20} rowGap={20}>
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
        </Grid>
      </div>
    </div>
  );
};
