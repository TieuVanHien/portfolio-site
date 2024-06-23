import React, { useRef } from 'react';
import {
  Home,
  Skills,
  Project,
  Contact,
  About,
  Experience
} from '@/components';
import { Footer } from '@/components/Footer';
import projects from '@/data/project/project';

export default function App() {
  const contactRef = useRef<HTMLDivElement>(null);
  return (
    <div className="wrapper max-h-fit h-screen max-w-6xl flex flex-col items-center justify-center">
      <Home contactRef={contactRef} />
      <About />
      <Experience />
      <Skills />
      <Project projects={projects} />
      <Contact contactRef={contactRef} />
      <Footer />
    </div>
  );
}
