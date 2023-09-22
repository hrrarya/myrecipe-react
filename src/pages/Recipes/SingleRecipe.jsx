import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SingleRecipe = () => {
  const params = useParams();
  const recipes = useSelector((state) => state.recipes);
  const singleRecipe = recipes.find((recipe) => recipe.id == params.id);

  return (
    <div className="recipe-single-page grid grid-cols-2 gap-3 mb-4 sm:grid-cols-1">
      <div className="recipe-single-page-image-container">
        <img
          src={singleRecipe.image}
          alt={singleRecipe.title}
          className="rounded shadow"
        />
      </div>
      <div className="recipe-single-page-content-container">
        <h1 className="text-3xl mb-1 ">{singleRecipe.title}</h1>
        <span className="inline-block bg-blue-600 p-1 rounded-lg text-white mb-2">
          {singleRecipe.category}
        </span>
        <div className="recipe-single-content">
          <p>{singleRecipe.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
