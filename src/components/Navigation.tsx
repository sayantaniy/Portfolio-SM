import { Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../ThemeProvider';
import StaticCat from "./StaticCat";

export const Navigation = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="nav glass w-3/4">
      <div className="nav-links">
        <Link 
          to="/" 
          className={`nav-link ${isActive('/') ? 'active' : ''}`}
        >
          Home
        </Link>
        <Link 
          to="/projects" 
          className={`nav-link ${isActive('/projects') ? 'active' : ''}`}
        >
          Projects
        </Link>
        <Link 
          to="/blog" 
          className={`nav-link ${isActive('/blog') ? 'active' : ''}`}
        >
          Blog
        </Link>
      </div>
      <StaticCat />
      <button 
        className="theme-toggle" 
        onClick={toggleTheme} 
        aria-label="Toggle theme"
        type="button"
      >
        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      
    </nav>
  );
};
