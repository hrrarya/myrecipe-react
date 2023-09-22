import { Link } from "react-router-dom";
import { recipeCategories } from "../../helper/data";

const RecipeCategories = () => {
  return (
    <section className="home-recipe-categories w-10/12 mx-auto my-0 py-10 grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
      {recipeCategories.map((item) => {
        const singleCategoryBackground = {
          backgroundImage: `url(${item.images?.[0]})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        };
        return (
          <div
            key={item.path}
            className="home-recipe-single-category h-40 flex flex-col justify-end px-3 py-4 rounded-lg shadow-md text-white relative"
            style={singleCategoryBackground}
          >
            <div className="recipe-single-category-overlay rounded-lg" />
            <div className="recipe-single-category-content z-[1]">
              <p className="text-2xl  font-semibold">{item.label}</p>
              <Link
                to={`recipes/category/${item.path}`}
                className="underline text-sm text-slate-200"
              >
                View All Recipes
              </Link>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default RecipeCategories;
