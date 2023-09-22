import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Recipes from "./Recipes";

const SingleCategoryRecipe = () => {
  const params = useParams();
  const recipes = useSelector((state) => state.recipes);
  console.log(recipes);
  const singleCategoryRecipes = recipes.filter(
    (recipe) => recipe.category === params.slug
  );

  return <Recipes recipes={singleCategoryRecipes} label={params.slug} />;
};

export default SingleCategoryRecipe;
