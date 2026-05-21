import { Link, NavLink } from 'react-router-dom';
import ModeToggle from './ModeToggle.jsx';

const linkBase =
  'text-sm md:text-base px-3 py-1 rounded-full hover:bg-white/10 transition';

export default function NavBar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-black/40 border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-8 py-3">
        <Link to="/" className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-gradient-to-br from-neonPink to-electricCyan shadow-neon" />
          <span className="font-semibold tracking-tight text-sm md:text-lg">
            InstaGen <span className="text-electricCyan">AI</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? 'bg-white/15' : 'text-white/70'}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/generate/post"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? 'bg-white/15' : 'text-white/70'}`
            }
          >
            Generate
          </NavLink>
          <NavLink
            to="/brand-kit"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? 'bg-white/15' : 'text-white/70'}`
            }
          >
            Brand Kit
          </NavLink>
          <NavLink
            to="/learn"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? 'bg-white/15' : 'text-white/70'}`
            }
          >
            Learn
          </NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
