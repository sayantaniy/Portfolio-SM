import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Navigation } from './components/Navigation';
import { BackgroundText } from './components/BackgroundText';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Blog } from './pages/Blog';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app flex flex-col justify-between">
        <Navigation />
        <BackgroundText />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
