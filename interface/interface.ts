import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

export interface Technology {
  name: string;
  src: StaticImageData;
}

export interface Project {
  _id: string;
  title: string;
  repo: string;
  img: StaticImageData;
  techstack: Technology[];
}
