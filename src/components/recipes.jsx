import React from 'react';
import './Recipes.css';
import './Card.css'; 
const Recipes = ({ recipes }) => {
    console.log(recipes);
    return (
        <>
        <div className = "RecipeList">
            <h1>Recipes</h1>
            <div style={{ zIndex: 1, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
                {recipes.map((recipe, index) => (
                    <div key={index} className="card">
                        <img src={recipe.recipe.image} alt={recipe.recipe.label} className="card-img"/>
                        <div className="card-content">
                            <h2 className="card-title">{recipe.recipe.label}</h2>
                            <p className="card-description">{recipe.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default Recipes;
