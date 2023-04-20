import React from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { Typing } from '../components/Typing';

interface ProjectProps {
  projects: {
    _id: string;
    title: string;
    repo: string;
    img: StaticImageData;
    techstack?: string;
  }[];
}

export const Project = ({ projects }: ProjectProps) => {
  return (
    <div id="projects" className="projects flex justify-evenly items-center">
      <Typing text="My Projects" />
      {projects.map((project) => (
        <div
          className="frame flex justify-between items-center m-16"
          key={project._id}
        >
          <Image
            src={project.img.src}
            alt={project.title}
            width={600}
            height={550}
          />
          <div className="details flex flex-col justify-between items-start">
            <h1>{project.title}</h1>
            <h3>Technologies: {project.techstack}</h3>
            <Link target="blank" className="repo-link" href={project.repo}>
              View On GitHub {'>'}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
