import { useEffect, useState } from "react";
import "./GeneratedRecipesPage.css";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";

function GeneratedRecipesPage() {
  const [recipes, setRecipes] = useState();
  const [isBusy, setBusy] = useState(true);

  useEffect(() => {
    async function fetchRecipes() {
      try {
        console.log(
          `http://localhost:3001/recipes?ingredients=${window.sessionStorage.getItem(
            "query"
          )}`
        );
        await axios
          .get(
            `http://localhost:3001/recipes?ingredients=${window.sessionStorage.getItem(
              "query"
            )}`
          )
          .then((response) => {
            console.log(response);
            setRecipes(response.data);
            setTimeout(() => {
              setBusy(false);
            }, 1000);
          });
      } catch (error) {
        console.log("Error: ", error);
        setBusy(false);
      }
    }

    fetchRecipes();
  }, []);

  return (
    <>
      {isBusy ? (
        <Spinner />
      ) : (
        <section className="recipe-grid">
          <h2>Choose your pasta recipe!</h2>
          <div>
            {recipes && recipes.length > 0 ? (
              recipes.map(({ recipe }) => {
                return (
                  <RecipeCard
                    key={recipe.label}
                    name={recipe.label}
                    img={recipe.image}
                    url={recipe.url}
                  />
                );
              })
            ) : (
              <div
                className="empty-state"
                style={{
                  position: "fixed",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <img src="images/empty.png" alt="boiling pasta" />
                <p>Hmm... try another set of ingredients</p>
                <Link to="/photoUpload">
                  <button className="submit-btn">Go back</button>
                </Link>
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
}

function RecipeCard({ name, img, url }) {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <article>
        <img src={img} alt="recipe image" />
        <p>{name}</p>
      </article>
    </a>
  );
}

export default GeneratedRecipesPage;
