import { Home, Skills, Project, Contact } from '@/components';
import { Footer } from '@/components/Footer';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { projects } from '@/project/project';

export default function App() {
  return (
    <ParallaxProvider>
      <div className="wrapper flex flex-col items-center justify-center p-24">
        <Parallax translateY={[1, -30]} speed={-5}>
          <Home />
        </Parallax>
        <Parallax translateY={[-15, 25]} speed={10}>
          <Skills />
        </Parallax>
        <Parallax translateY={[-10, 15]} speed={-5}>
          <Project projects={projects} />
        </Parallax>
        <Parallax translateY={[-25, 35]} speed={10}>
          <Contact />
        </Parallax>
        <Footer />
      </div>
    </ParallaxProvider>
  );
}
