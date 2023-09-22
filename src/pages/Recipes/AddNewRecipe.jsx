import { useDispatch, useSelector } from "react-redux";
import { add_new, edit } from "../../redux/recipe.reducer";
import { useEffect, useRef, useState } from "react";
import { recipeCategories, schema } from "../../helper/data";
import { Navigate, useParams } from "react-router-dom";

const AddNewRecipe = ({ path }) => {
  const title = useRef("");
  const image = useRef("");
  const description = useRef("");
  const category = useRef("");
  const [error, setError] = useState("");
  const [saveButtonText, setSaveButtonText] = useState("Save");

  const params = useParams();
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  const { isAuthenticated } = useSelector((state) => state.authentication);

  useEffect(() => {
    if (params?.id) {
      const getRecipeById = recipes.find((recipe) => recipe.id === +params.id);

      title.current.value = getRecipeById.title;
      image.current.value = getRecipeById.image;
      description.current.value = getRecipeById.description;
      category.current.value = getRecipeById.category;
      return;
    }
    _reset();
  }, [path]);

  const _handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      title: title.current.value,
      image: image.current.value,
      description: description.current.value,
      category: category.current.value,
    };

    const { error } = schema.validate(payload);
    if (error?.message) {
      setError(error.message);
      return false;
    }
    _savingButton();

    // if trying to update an existing record,
    if (params?.id) {
      payload.id = +params.id;
      dispatch(edit(payload));
      return;
    }
    // if try to add a new record
    _reset();
    dispatch(add_new(payload));
  };

  const _reset = () => {
    title.current.value = "";
    image.current.value = "";
    description.current.value = "";
    category.current.value = "";
    setError("");
  };

  const _savingButton = () => {
    setSaveButtonText("Saving...");
    const timer = setTimeout(() => {
      setSaveButtonText("Save");
      clearTimeout(timer);
    }, 1000);
  };

  if (!isAuthenticated) return <Navigate to="/recipes" replace={true} />;
  return (
    <section className="new-recipe-page relative">
      <h2 className="text-3xl font-semibold mb-4">Submit a Recipe</h2>
      <form onSubmit={_handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Recipe Title</label>
          <input
            ref={title}
            type="text"
            id="title"
            placeholder="Recipe Name ...."
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Recipe Image</label>
          <input
            ref={image}
            type="url"
            id="image"
            placeholder="Enter Image URL...."
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea ref={description} id="description" required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            ref={category}
            name="category"
            id="category"
            className="w-1/3 px-1 py-2"
          >
            <option value="">Select A Category</option>
            {recipeCategories.map((item) => (
              <option key={item.path} value={item.path}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <button
            type="submit"
            onClick={_handleSubmit}
            className="border px-3 py-2 rounded hover:bg-teal-300 "
          >
            {saveButtonText}
          </button>
        </div>
      </form>
      {"" !== error && (
        <div className="error-message text-red-600 text-center py-6">
          {error}
        </div>
      )}
    </section>
  );
};

export default AddNewRecipe;
