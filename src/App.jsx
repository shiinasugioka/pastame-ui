import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar.jsx'
import HomePage from './components/HomePage.jsx'
import GreenCircle from './components/GreenCircle';
import LandingPage from './LandingPage/LandingPage.jsx';
import './App.css'

const App = () => {
  const [circleState, setCircleState] = useState(0);

  const isLandingPage = location.pathname === '/';

  return (
    <Router>
      {!isLandingPage && <NavBar onMenuOpen={() => setCircleState(4)} onMenuClose={() => setCircleState(0)} />}
      {!isLandingPage && <GreenCircle state={circleState} />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<HomePage />} />
        <Route path="/mission" element={<HomePage />} />
        <Route path="/github" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
