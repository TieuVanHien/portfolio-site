import { StaticImageData } from 'next/image';

export interface Technology {
  name: string;
  src: StaticImageData;
}

export interface Project {
  _id: string;
  title: string;
  repo: string;
  img: StaticImageData;
  live: string;
  desc: string;
  techstack: Technology[];
}
