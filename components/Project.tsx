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
    <section id="projects" className="projects flex justify-evenly">
      {projects.map((project) => (
        <>
          <div className="heading flex justify-start items-center">
            <h1>My Projects</h1>
            <div className="line"></div>
          </div>
          <div
            className="frame flex justify-between items-center m-16"
            key={project._id}
          >
            <Image
              className="image"
              src={project.img.src}
              alt={project.title}
              width={600}
              height={600}
            />
            <div className="details flex flex-col justify-between items-start">
              <div className="project-heading flex justify-between items-center">
                <h1>{project.title}</h1>
                <div className="link">
                  <Link
                    target="blank"
                    className="repo-link mr-2"
                    href={project.repo}
                  >
                    <GitHubIcon sx={{ fontSize: 25 }} />
                  </Link>
                  <Link
                    target="blank"
                    className="repo-link"
                    href={project.repo}
                  >
                    <OpenInNew sx={{ fontSize: 25 }} />
                  </Link>
                </div>
              </div>
              <h2>{project.desc}</h2>
              {project.techstack && (
                <div className="flex">
                  {project.techstack.map((tech) => (
                    <div className="flex" key={tech.name}>
                      <Image
                        className="icon ml-2"
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
        </>
      ))}
    </section>
  );
};
