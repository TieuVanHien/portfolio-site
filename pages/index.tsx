import { Home, Skills, Project, Contact } from '../components';
import { projects } from '../project/project';

export default function App() {
  return (
    <div className="wrapper flex flex-col items-center justify-center p-24">
      <Home />
      <Skills />
      <Project projects={projects} />
      <Contact />
    </div>
  );
}
