import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";

const Recipes = () => {
  const { isAuthenticated } = useSelector((state) => state.authentication);
  
  return (
    <div className="recipes-page flex px-4">
      <div className="recipe-sidebar w-3/12 min-h-[300px] sm:hidden">
        <nav className="recipe-sidebar-menu flex flex-col">
          <NavLink to="/recipes/">All Recipes</NavLink>
          {isAuthenticated && (
            <NavLink to="/recipes/add-new">Add a Recipe</NavLink>
          )}
        </nav>
      </div>
      <div className="recipe-content w-9/12 sm:w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Recipes;
