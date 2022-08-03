import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import './styles/globals.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/React-Portfolio/" element={<HomePage />} />
        <Route path="/React-Portfolio/Project" element={<ProjectPage />} />
        <Route path="/React-Portfolio/About" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
