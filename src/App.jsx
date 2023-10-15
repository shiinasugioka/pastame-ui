import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import HomePage from "./components/HomePage.jsx";
import GreenCircle from "./components/GreenCircle";
import LandingPage from "./LandingPage/LandingPage.jsx";
import PhotoUploadPage from "./PhotoUploadPage/PhotoUploadPage.jsx";
import GeneratedRecipesPage from "./GeneratedRecipesPage/GeneratedRecipesPage.jsx";
import "./App.css";

export const QueryContext = createContext();

const App = () => {
  const [circleState, setCircleState] = useState(0);
  const [query, setQuery] = useState("");
  const [isLanding, setIsLanding] = useState(location.pathname === "/");

  return (
    <QueryContext.Provider value={{ query, setQuery }}>
      <Router>
        {!isLanding && (
          <NavBar
            onMenuOpen={() => setCircleState(4)}
            onMenuClose={() => setCircleState(0)}
          />
        )}
        {!isLanding && <GreenCircle state={circleState} />}
        <Routes>
          <Route
            path="/"
            element={<LandingPage setIsLanding={setIsLanding} />}
          />
          <Route path="/photoUpload" element={<PhotoUploadPage />} />
          <Route path="/recipe" element={<GeneratedRecipesPage />} />
          <Route path="/about" element={<HomePage />} />
          <Route path="/mission" element={<HomePage />} />
          <Route path="/github" element={<HomePage />} />
        </Routes>
      </Router>
    </QueryContext.Provider>
  );
};

export default App;
