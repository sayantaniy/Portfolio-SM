import { Heart, ArrowUp } from 'lucide-react';
import CherryBlossom from './CherryBlossom';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="flex items-center gap-2">
          <CherryBlossom size={18} />
          <span className="font-mono text-xs tracking-widest uppercase opacity-75">
            あおい はる • 2026
          </span>
        </div>

        <p className="footer-text">
          <span>Crafted with</span>
          <Heart size={13} className="footer-heart fill-pink-500 text-pink-500" />
          <span>by Sayantani Manna. All rights reserved.</span>
        </p>

        <button 
          onClick={scrollToTop}
          className="mt-2 text-xs font-mono inline-flex items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity cursor-pointer text-[var(--text-color)]"
          type="button"
          aria-label="Scroll back to top"
        >
          <ArrowUp size={13} />
          <span>Back to top</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
