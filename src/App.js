import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';

import { Home } from './pages/Home/Home.tsx';
import { Fabflix } from './pages/Fabflix.tsx';
import { Bapple } from './pages/Bapple.tsx';
import { Farmly } from './pages/Farmly.tsx';
import ScrollToTop from './components/ScrollToTop/ScrollToTop.tsx';

function App() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="App">
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/fabflix" element={<Fabflix />} />
          <Route path="/bapple" element={<Bapple />} />
          <Route path="/farmly" element={<Farmly />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
