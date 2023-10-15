import express from "express";
import dotenv from "dotenv";
import axios from "axios";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());

app.get("/recipes", async (req, res) => {
  try {
    const recipes = await axios.get(
      `${process.env.RECIPE_API_URL}?q=pasta,${req.query.ingredients}&app_id=${process.env.RECIPE_APP_ID}&app_key=${process.env.RECIPE_API_KEY}`
    );

    // console.log(recipes.data);
    res.send(recipes.data.hits);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
