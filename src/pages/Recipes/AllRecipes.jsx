import { useSelector } from "react-redux";
import Recipes from "../../components/page-components/Recipes";

const AllRecipes = () => {
  const recipes = useSelector((state) => state.recipes);

  return <Recipes recipes={recipes} />;
};

export default AllRecipes;
