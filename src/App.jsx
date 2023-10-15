import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar.jsx'
import HomePage from './components/HomePage.jsx'
import GreenCircle from './components/GreenCircle';
import './App.css'

const App = () => {
  const [circleState, setCircleState] = useState(0);

  return (
    <Router>
      <NavBar onMenuOpen={() => setCircleState(4)} onMenuClose={() => setCircleState(0)} />
      <GreenCircle state={circleState} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<HomePage />} />
        <Route path="/mission" element={<HomePage />} />
        <Route path="/github" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
