

import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar.jsx'
import HomePage from './components/HomePage.jsx'
import './App.css'

const App = () => (
  <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<HomePage />} />
      <Route path="/mission" element={<HomePage />} />
      <Route path="/github" element={<HomePage />} />
    </Routes>
  </Router>
);

export default App;