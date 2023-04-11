import { Home, Project } from '../components';

export default function App() {
  return (
    <div className="wrapper flex flex-col items-center justify-between p-24">
      <Home />
      <Project />
    </div>
  );
}
