import { Home, Skills, Project, Contact } from '@/components';
import { Footer } from '@/components/Footer';
import projects from '@/project/project';

export default function App() {
  return (
    <div className="wrapper max-h-fit h-screen max-w-6xl flex flex-col items-center justify-center">
      <Home />
      <Skills />
      <Project projects={projects} />
      <Contact />
      <Footer />
    </div>
  );
}
