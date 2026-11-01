import { Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../ThemeProvider';
import StaticCat from "./StaticCat";

export const Navigation = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="nav-container">
      <nav className="nav">
        {/* Brand / Monogram */}
        <Link to="/" className="nav-brand" aria-label="Sayantani Manna Portfolio">
          <span className="w-2 h-2 rounded-full bg-[var(--accent-pink)] shadow-[0_0_8px_var(--accent-pink)]"></span>
          <span className="nav-brand-text">Sayantani M.</span>
        </Link>

        {/* Segmented Navigation Links */}
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
            to="/connect" 
            className={`nav-link ${isActive('/connect') ? 'active' : ''}`}
          >
            Connect
          </Link>
        </div>

        {/* Actions: Pet Companion & Theme Switcher */}
        <div className="nav-actions">
          <StaticCat />

          <button 
            className="theme-toggle" 
            onClick={toggleTheme} 
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            type="button"
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <Sun size={15} className="text-amber-300" />
            ) : (
              <Moon size={15} className="text-indigo-600" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
