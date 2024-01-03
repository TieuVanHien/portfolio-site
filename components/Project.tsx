import React from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import projects from '@/project/project';
import { Technology } from '@/interface/interface';

interface ProjectProps {
  projects: {
    _id: string;
    title: string;
    repo: string;
    img: StaticImageData;
    techstack?: Technology[];
  }[];
}

export const Project = ({ projects }: ProjectProps) => {
  return (
    <div id="projects" className="projects flex justify-evenly items-center">
      <div className="heading">
        <h1>My Projects</h1>
        <div className="line"></div>
      </div>
      {projects.map((project) => (
        <div
          className="frame flex justify-between items-center m-16"
          key={project._id}
        >
          <Image
            className="image"
            src={project.img.src}
            alt={project.title}
            width={500}
            height={500}
          />
          <div className="details flex flex-col justify-between items-start">
            <h1>{project.title}</h1>
            {project.techstack && (
              <div className="flex">
                {project.techstack.map((tech) => (
                  <div className="flex" key={tech.name}>
                    <Image
                      src={tech.src}
                      alt={tech.name}
                      width={5}
                      height={5}
                    />
                  </div>
                ))}
              </div>
            )}

            <Link target="blank" className="repo-link" href={project.repo}>
              View On GitHub {'>'}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
