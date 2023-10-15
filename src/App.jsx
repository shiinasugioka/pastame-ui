import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar.jsx'
import HomePage from './components/HomePage.jsx'
import GreenCircle from './components/GreenCircle';
import LandingPage from './LandingPage/LandingPage.jsx';
import GeneratedRecipesPage from './GeneratedRecipesPage/GeneratedRecipesPage.jsx';
import Recipes from './components/recipes.jsx';
import PhotoUploadPage from './PhotoUploadPage/PhotoUploadPage.jsx';
import './App.css'
import dummyRecipes from './dummyRecipes.json';
const App = () => {
  const [circleState, setCircleState] = useState(0);
  const [fullScreen, setFullScreen] = useState(1);

  const testRecipe = [{
    title: "Spaghetti Carbonara",
    description: "A classic Italian pasta dish made with eggs, cheese, bacon, and black pepper.",
    ingredients: ["spaghetti", "eggs", "pecorino romano cheese", "pancetta or bacon", "black pepper"],
    instructions: ["Cook spaghetti according to package instructions.", "In a separate bowl, whisk together eggs and cheese.", "Cook pancetta or bacon in a pan until crispy.", "Add cooked spaghetti to the pan with the pancetta or bacon.", "Remove pan from heat and add the egg and cheese mixture, stirring quickly to coat the spaghetti.", "Add black pepper to taste and serve immediately."]
}];
  const isLandingPage = location.pathname === '/';
  const isRecipePage = location.pathname === '/recipes';

  return (
    <Router>
      {!isLandingPage && <NavBar onMenuOpen={() => setCircleState(4)} onMenuClose={() => setCircleState(0)} />}
      {!isLandingPage && (isRecipePage ? <GreenCircle state={fullScreen} /> : <GreenCircle state={circleState} />)}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<PhotoUploadPage />} />
        <Route path="/about" element={<HomePage />} />
        <Route path="/mission" element={<HomePage />} />
        <Route path="/github" element={<HomePage />} />
        <Route path="/recipes" element={
          <div style={{ position: 'relative', zIndex: 1 }}>
           <Recipes recipes={dummyRecipes} />
        </div>
        } />
      </Routes>
    </Router>
  );
};

export default App;
