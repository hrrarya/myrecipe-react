import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { remove } from "../../redux/recipe.reducer";
import Modal from "react-modal";
import SearchRecipes from "./SearchRecipe";
import { useSearchParams } from "react-router-dom";

const Recipes = ({ recipes, label }) => {
  const { isAuthenticated } = useSelector((state) => state.authentication);
  const [openModal, setModal] = useState(false);
  const [id, setId] = useState(null);
  const [allRecipes, setAllRecipes] = useState(recipes);

  // Search recipes
  const [searchParams, setSearchParams] = useSearchParams();

  const _handleSearch = (e) => {
    setSearchParams((params) => {
      params.set("search", e.target.value);
      return params;
    });
  };

  const dispatch = useDispatch();

  const _handleDelete = () => {
    if (id) {
      dispatch(remove(id));
      setModal(false);
    }
  };

  const _getFilteredRecipes = (recipes) => {
    console.log(searchParams.get("search") !== "");
    if (searchParams.get("search") && searchParams?.get("search") != "") {
      return recipes.filter((recipe) =>
        recipe.title
          ?.toLowerCase()
          .startsWith(searchParams.get("search")?.toLowerCase())
      );
    }
    return recipes;
  };
  // _getFilteredRecipes(allRecipes);
  if (allRecipes && allRecipes?.length === 0) {
    return (
      <div className="recipes-link">
        <p className="text-3xl mb-4 font-semibold">
          No Recipe Found {"" !== label && <span>for {label}</span>}
        </p>
      </div>
    );
  }
  return (
    <>
      <Modal
        isOpen={openModal}
        className="bg-slate-600 text-white z-10 px-4 py-3 shadow-lg rounded-md w-2/4 m-auto mt-60"
      >
        <div className="">
          <h1 className="mb-3">Are you sure to delete this recipe?</h1>
          <button
            className="bg-blue-600 hover:bg-blue-400 transition px-3 mr-3 shadow shadow-white"
            onClick={_handleDelete}
          >
            Yes
          </button>
          <button
            className=" px-3 mr-1 shadow shadow-white hover:bg-blue-400"
            onClick={() => setModal(false)}
          >
            No
          </button>
        </div>
      </Modal>
      <p className="text-3xl mb-4 font-semibold">
        Recipes {"" !== label && <span>for {label}</span>}
      </p>
      <SearchRecipes
        setAllRecipes={setAllRecipes}
        recipes={allRecipes}
        _handleSearch={_handleSearch}
      />
      <div className="recipes-list grid grid-cols-3 gap-3 md:grid-cols-2 sm:grid-cols-1">
        {_getFilteredRecipes(allRecipes).map((recipe) => {
          return (
            <div key={recipe.id} className="single-recipe relative shadow">
              {recipe?.category && (
                <span className="absolute right-0 inline-block bg-blue-600 text-white rounded-lg p-2 mt-2 mr-2">
                  {recipe.category}
                </span>
              )}
              <div className="img-container">
                <img src={recipe.image} alt={recipe.title} />
              </div>
              <div className="p-2">
                <Link
                  to={`/recipes/${recipe.id}`}
                  className="text-2xl text-blue-400 hover:underline"
                >
                  {recipe.title}
                </Link>
                <p>
                  {recipe.description.slice(0, 100)}...{" "}
                  <Link
                    to={`/recipes/${recipe.id}`}
                    className="text-blue-600 underline"
                  >
                    read more
                  </Link>
                </p>
                {isAuthenticated && (
                  <p>
                    <Link
                      className="text-blue-600 underline"
                      to={`/recipes/edit/${recipe.id}`}
                    >
                      Edit
                    </Link>{" "}
                    |{" "}
                    <button
                      className="text-blue-600 underline"
                      // to={`/recipes/delete/${recipe.id}`}
                      onClick={() => {
                        setModal(true);
                        setId("" + recipe.id);
                      }}
                    >
                      Delete
                    </button>
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
Recipes.defaultProps = {
  recipes: [],
  label: "",
};
export default Recipes;
