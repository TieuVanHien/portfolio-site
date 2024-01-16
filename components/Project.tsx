import React from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { Technology } from '@/interface/interface';
import {
  GitHub as GitHubIcon,
  OpenInNew as OpenInNew
} from '@mui/icons-material';

interface ProjectProps {
  projects: {
    _id: string;
    title: string;
    repo: string;
    img: StaticImageData;
    live: string;
    desc: string;
    techstack?: Technology[];
  }[];
}

export const Project = ({ projects }: ProjectProps) => {
  return (
    <section
      id="projects"
      className="projects flex flex-col justify-evenly w-full h-auto mt-16 lg:w-full lg:h-auto lg:flex lg:flex-col lg:items-center lg:justify-evenly"
    >
      <div className="heading mb-8 flex justify-start items-center lg:h-1/10 lg:w-full lg:mb-8 lg:flex lg:justify-start lg:items-center">
        <h1 className="text-2xl lg:text-4xl">My Projects</h1>
        <div className="line ml-4 w-2/5 lg:w-1/4 lg:ml-4"></div>
      </div>
      {projects.map((project) => (
        <div
          className="frame border-solid border-2 rounded-md border-slate-500 p-4 mb-14 flex justify-center flex-col items-center lg:border-none lg:flex-row lg:w-full lg:h-50vh lg:flex lg:justify-between lg:items-center lg:mt-16"
          key={project._id}
        >
          <Image
            className="image w-full h-52 lg:rounded-lg lg:w-1/2 lg:h-full"
            src={project.img.src}
            alt={project.title}
            width={600}
            height={600}
          />
          <div className="details w-full h-52 mt-8 flex flex-col justify-evenly lg:border-solid lg:border-2 lg:border-slate-500 lg:m-0 lg:rounded-lg lg:h-72 lg:p-8 lg:w-2/5 lg:flex lg:flex-col lg:justify-between lg:items-start">
            <div className="project-heading flex justify-between items-center lg:w-full lg:flex lg:justify-between lg:items-center">
              <h1 className="text-2xl lg:text-3xl">{project.title}</h1>
              <div className="link">
                <Link
                  target="blank"
                  className="repo-link mr-2 lg:mr-2"
                  href={project.repo}
                >
                  <GitHubIcon sx={{ fontSize: 25 }} />
                </Link>
                <Link target="blank" className="repo-link" href={project.repo}>
                  <OpenInNew sx={{ fontSize: 25 }} />
                </Link>
              </div>
            </div>
            <h2 className="text-base lg:text-lg">{project.desc}</h2>
            {project.techstack && (
              <div className="lg:flex flex">
                {project.techstack.map((tech) => (
                  <div className="lg:flex" key={tech.name}>
                    <Image
                      className="icon w-8 h-8 ml-2 lg:ml-2"
                      src={tech.src}
                      alt={tech.name}
                      width={35}
                      height={35}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};
