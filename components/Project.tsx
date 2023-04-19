import React from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

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
      {projects.map((project) => (
        <div
          className="frame flex justify-between items-center mb-16"
          key={project._id}
        >
          <Image
            src={project.img.src}
            alt={project.title}
            width={600}
            height={550}
          />
          <div className="details flex flex-col justify-between items-start">
            <h2>{project.title}</h2>
            <h2>Technologies: {project.techstack}</h2>
            <Link href={project.repo}>View on GitHub</Link>
          </div>
        </div>
      ))}
    </div>
  );
};
