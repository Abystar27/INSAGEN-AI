import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import MainLayout from './layouts/MainLayout.jsx';
import Home from './pages/Home.jsx';
import PostGenerator from './pages/PostGenerator.jsx';
import StoryGenerator from './pages/StoryGenerator.jsx';
import CarouselGenerator from './pages/CarouselGenerator.jsx';
import BrandKit from './pages/BrandKit.jsx';
import Learn from './pages/Learn.jsx';
import NotFound from './pages/NotFound.jsx';
import ModeContext from './context/ModeContext.js';

export default function App() {
  const [mode, setMode] = useState('neon'); // 'neon' | 'wild'

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      <div
        className={
          mode === 'neon'
            ? 'min-h-screen bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] text-white transition-colors'
            : 'min-h-screen bg-gradient-to-br from-[#ff6b00] via-[#ff00d9] to-[#2e00ff] text-white transition-colors'
        }
      >
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/generate/post" element={<PostGenerator />} />
            <Route path="/generate/story" element={<StoryGenerator />} />
            <Route path="/generate/carousel" element={<CarouselGenerator />} />
            <Route path="/brand-kit" element={<BrandKit />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainLayout>
      </div>
    </ModeContext.Provider>
  );
}
