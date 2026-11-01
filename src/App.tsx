import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { Navigation } from './components/Navigation';
import { BackgroundText } from './components/BackgroundText';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Connect } from './pages/Connect';
import MovingCat from './components/MovingCat.tsx';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app flex flex-col justify-between">
        <MovingCat />
        <Navigation />
        <BackgroundText />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/blog" element={<Navigate to="/connect" replace />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
