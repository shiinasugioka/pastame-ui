import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import HomePage from "./components/HomePage.jsx";
import GreenCircle from "./components/GreenCircle";
import LandingPage from "./LandingPage/LandingPage.jsx";
import PhotoUploadPage from "./PhotoUploadPage/PhotoUploadPage.jsx";
import GeneratedRecipesPage from "./GeneratedRecipesPage/GeneratedRecipesPage.jsx";
import "./App.css";

const App = () => {
  const [circleState, setCircleState] = useState(0);
  const [file, setFile] = useState([]);
  const [isLanding, setIsLanding] = useState(location.pathname === "/");

  return (
    <Router>
      {!isLanding && (
        <NavBar
          onMenuOpen={() => setCircleState(4)}
          onMenuClose={() => setCircleState(0)}
          setIsLanding={setIsLanding}
        />
      )}
      {!isLanding && <GreenCircle state={circleState} />}
      <Routes>
        <Route path="/" element={<LandingPage setIsLanding={setIsLanding}/>} />
        <Route
          path="/photoUpload"
          element={<PhotoUploadPage file={file} setFile={setFile} />}
        />
        <Route
          path="/recipe"
          element={<GeneratedRecipesPage file={file} setFile={setFile} />}
        />
        <Route path="/about" element={<HomePage />} />
        <Route path="/mission" element={<HomePage />} />
        <Route path="/github" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
