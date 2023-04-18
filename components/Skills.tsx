import React from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';

export const Skills = () => {
  return (
    <div id="skills" className="container flex-col justify-evenly">
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
          src="https://techstack01.s3.amazonaws.com/skill/nextjs.svg"
          alt="aws"
          width={1}
          height={1}
        />
        <Image
          src="https://techstack01.s3.amazonaws.com/skill/react.svg"
          className="img2"
          alt="aws"
          width={1}
          height={1}
        />
        <Image
          src="https://techstack01.s3.amazonaws.com/skill/typescript.svg"
          className="img3"
          alt="aws"
          width={1}
          height={1}
        />
        <Image
          src="https://techstack01.s3.amazonaws.com/skill/js.svg"
          className="img4"
          alt="aws"
          width={1}
          height={1}
        />
        <Image
          src="https://techstack01.s3.amazonaws.com/skill/bootstrap.svg"
          className="img5"
          alt="aws"
          width={1}
          height={1}
        />
        <Image
          src="https://techstack01.s3.amazonaws.com/skill/scss.svg"
          className="img6"
          alt="aws"
          width={1}
          height={1}
        />
        <Image
          src="https://techstack01.s3.amazonaws.com/skill/tailwind.svg"
          className="img7"
          alt="aws"
          width={1}
          height={1}
        />
        <Image
          src="https://techstack01.s3.amazonaws.com/skill/git.svg"
          className="img8"
          alt="aws"
          width={1}
          height={1}
        />
        <Image
          src="https://techstack01.s3.amazonaws.com/skill/github.svg"
          className="img9"
          alt="aws"
          width={1}
          height={1}
        />
        <Image
          src="https://techstack01.s3.amazonaws.com/skill/docker.svg"
          className="img10"
          alt="aws"
          width={1}
          height={1}
        />
        <Image
          src="https://techstack01.s3.amazonaws.com/skill/aws.svg"
          className="img11"
          alt="aws"
          width={1}
          height={1}
        />
        <Image
          src="https://techstack01.s3.amazonaws.com/skill/nodejs.svg"
          className="img12"
          alt="aws"
          width={1}
          height={1}
        />
        <Image
          src="https://techstack01.s3.amazonaws.com/skill/sql.svg"
          className="img13"
          alt="aws"
          width={1}
          height={1}
        />
        <Image
          src="https://techstack01.s3.amazonaws.com/skill/circleci.svg"
          className="img14"
          alt="aws"
          width={1}
          height={1}
        />
      </div>
    </div>
  );
};
