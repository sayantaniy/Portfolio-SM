import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './ThemeProvider.tsx'

// Initialize theme on page load
const initializeTheme = () => {
  const saved = localStorage.getItem('theme');
  const theme = (saved === 'light' || saved === 'dark') ? saved : 'dark';
  document.documentElement.setAttribute('data-theme', theme);
};

initializeTheme();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
