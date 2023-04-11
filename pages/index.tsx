import { Inter } from 'next/font/google';
import { Home } from '../components/Home';

const inter = Inter({ subsets: ['latin'] });

export default function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Home />
    </div>
  );
}
