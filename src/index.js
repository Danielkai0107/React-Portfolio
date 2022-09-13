import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Burger from './components/Burger';
import Navbar from './components/Navbar';
import { PortfolioProvider } from './func/context';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import './styles/globals.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PortfolioProvider>
      <BrowserRouter basename="/React-Portfolio">
        <Navbar />
        <Burger />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Project" element={<ProjectPage />} />
          <Route path="/About" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </PortfolioProvider>
  </React.StrictMode>,
);
