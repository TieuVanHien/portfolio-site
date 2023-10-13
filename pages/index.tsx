import { Home, Skills, Project, Contact } from '@/components';
import { Footer } from '@/components/Footer';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { projects } from '@/project/project';

export default function App() {
  return (
    <ParallaxProvider>
      <div className="wrapper flex flex-col items-center justify-center p-24">
        <Parallax translateY={[0, 0]} speed={-5}>
          <Home />
        </Parallax>
        <Parallax translateY={[20, -30, 'easeOutQuint']} speed={10}>
          <Skills />
        </Parallax>
        <Parallax translateY={[-10, 15, 'easeOutQuad']} speed={20}>
          <Project projects={projects} />
        </Parallax>
        <Parallax translateY={[-25, 20, 'easeOutQuint']} speed={10}>
          <Contact />
        </Parallax>
        <Parallax translateX={[-5, 0, 'easeOutQuint']} speed={10}>
          <Footer />
        </Parallax>
      </div>
    </ParallaxProvider>
  );
}
