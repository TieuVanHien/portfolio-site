import coversy from './coversy.gif';
import nail from './nail-salon-min.jpeg';
import booking from './booking-system-min.jpeg';
import ReactIcon from '@/assets/react-svgrepo-com.svg';
import ReduxIcon from '@/assets/redux-svgrepo-com.svg';
import ScssIcon from '@/assets/scss2-svgrepo-com.svg';
import NodeJSIcon from '@/assets/node-js-svgrepo-com.svg';
import MongoDBIcon from '@/assets/mongodb-svgrepo-com.svg';
import AWSIcon from '@/assets/aws-svgrepo-com.svg';
import MUIIcon from '@/assets/material-ui-svgrepo-com.svg';
import FigmaIcon from '@/assets/figma-svgrepo-com.svg';
import TypeScriptIcon from '@/assets/typescript-official-svgrepo-com.svg';
import NextJSIcon from '@/assets/next-dot-js-svgrepo-com.svg';
import DjangoIcon from '@/assets/django-icon-svgrepo-com.svg';
import TailwindIcon from '@/assets/tailwindcss-icon-svgrepo-com.svg';

import { Project } from '@/interface/interface';

const projects: Project[] = [
  {
    _id: '1',
    title: 'Coversy',
    repo: 'https://github.com/TieuVanHien/coversy',
    img: coversy,
    live: '',
    desc: 'Coversy stands as a full-stack application, providing a one-stop solution for businesses focused on instructor management.',
    techstack: [
      { name: 'React', src: ReactIcon },
      { name: 'Redux', src: ReduxIcon },
      { name: 'SCSS', src: ScssIcon },
      { name: 'Node.js', src: NodeJSIcon },
      { name: 'MongoDB', src: MongoDBIcon },
      { name: 'AWS', src: AWSIcon },
      { name: 'Material-UI', src: MUIIcon }
    ]
  },
  {
    _id: '2',
    title: 'Queensland Nails & Spa',
    repo: 'https://github.com/TieuVanHien/nail-website',
    img: nail,
    live: 'https://www.queenslandnail.ca/',
    desc: 'Queensland Nails & Spa website: Where beauty meets relaxation, offering a seamless blend of nail services and spa treatments in an inviting online space.',
    techstack: [
      { name: 'React', src: ReactIcon },
      { name: 'SCSS', src: ScssIcon },
      { name: 'Node.js', src: NodeJSIcon },
      { name: 'Figma', src: FigmaIcon },
      { name: 'Material-UI', src: MUIIcon }
    ]
  },
  {
    _id: '3',
    title: 'Booking System',
    repo: 'https://github.com/TieuVanHien/booking-system',
    img: booking,
    live: '',
    desc: 'A full-stack application that provides a cutting-edge Booking System, revolutionizing how businesses manage reservations',
    techstack: [
      { name: 'Next.js', src: NextJSIcon },
      { name: 'Django', src: DjangoIcon },
      { name: 'TypeScript', src: TypeScriptIcon },
      { name: 'Tailwind CSS', src: TailwindIcon },
      { name: 'Figma', src: FigmaIcon },
      { name: 'Material-UI', src: MUIIcon }
    ]
  }
];

export default projects;
