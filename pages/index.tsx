import { Home, Skills, Project, Contact, About } from '@/components';
import { Footer } from '@/components/Footer';
import projects from '@/data/project/project';

export default function App() {
  return (
    <div className="wrapper max-h-fit h-screen max-w-6xl flex flex-col items-center justify-center">
      <Home />
      <About />
      <Skills />
      <Project projects={projects} />
      <Contact />
      <Footer />
    </div>
  );
}
