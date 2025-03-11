import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { Homepage } from './Home';
import { Project } from './Project'
import { Achievement } from './Achievement';
import { Skills } from './Skills';
import { Footer } from './Footer';
function App() {
  
  useEffect(() => {
    let width = window.screen.width;
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        window.location.reload();
      }, 100);
    };
    if(width>700){
      window.addEventListener("resize", handleResize);
    }

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div id="main-section">
      <Homepage />
      <Project />
      <Achievement />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
