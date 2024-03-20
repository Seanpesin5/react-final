import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Aboutme from './Components/AboutMe';
import Players from './Components/Players';
import Home from './Components/HomePage';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import reportWebVitals from "./reportWebVitals";
import SearchTeam from './Components/SearchTeam';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/players" element={<Players />} />
        <Route path="/SearchTeam" element={<SearchTeam />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

reportWebVitals();