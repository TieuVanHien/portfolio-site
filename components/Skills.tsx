import React from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';

export const Skills = () => {
  return (
    <div className="container flex-col justify-between">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString('Some Of My Tech Stacks </>')
            .changeDelay(5)
            .callFunction(() => {})
            .pauseFor(2500)
            .start();
        }}
        options={{
          wrapperClassName: 'typing-skill'
        }}
      />

      <div className="skills flex justify-center items-center  mt-16">
        <Image
          className="img1"
          src="https://portfolio-site01.s3.amazonaws.com/skills/nextjs.svg"
          alt="aws"
          width={1}
          height={1}
        />
        <Image
          src="https://portfolio-site01.s3.amazonaws.com/skills/react.svg"
          className="img2"
          alt="aws"
          width={1}
          height={1}
        />
        <Image
          src="https://portfolio-site01.s3.amazonaws.com/skills/typescript.svg"
          className="img3"
          alt="aws"
          width={1}
          height={1}
        />
        <Image
          src="https://portfolio-site01.s3.amazonaws.com/skills/js.svg"
          className="img4"
          alt="aws"
          width={1}
          height={1}
        />
        <Image
          src="https://portfolio-site01.s3.amazonaws.com/skills/bootstrap.svg"
          className="img5"
          alt="aws"
          width={1}
          height={1}
        />
        <Image
          src="https://portfolio-site01.s3.amazonaws.com/skills/scss.svg"
          className="img6"
          alt="aws"
          width={1}
          height={1}
        />
        <Image
          src="https://portfolio-site01.s3.amazonaws.com/skills/tailwind.svg"
          className="img7"
          alt="aws"
          width={1}
          height={1}
        />
        <Image
          src="https://portfolio-site01.s3.amazonaws.com/skills/git.svg"
          className="img8"
          alt="aws"
          width={1}
          height={1}
        />
        <Image
          src="https://portfolio-site01.s3.amazonaws.com/skills/github.svg"
          className="img9"
          alt="aws"
          width={1}
          height={1}
        />
        <Image
          src="https://portfolio-site01.s3.amazonaws.com/skills/docker.svg"
          className="img10"
          alt="aws"
          width={1}
          height={1}
        />
        <Image
          src="https://portfolio-site01.s3.amazonaws.com/skills/aws.svg"
          className="img11"
          alt="aws"
          width={1}
          height={1}
        />
        <Image
          src="https://portfolio-site01.s3.amazonaws.com/skills/nodejs.svg"
          className="img12"
          alt="aws"
          width={1}
          height={1}
        />
      </div>
    </div>
  );
};
