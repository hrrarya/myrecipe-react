import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logout } from "../redux/authentication.reducer";

const Header = ({ isAuthenticated }) => {
  const dispatch = useDispatch();

  return (
    <header className="flex sm:block justify-between items-center recipe-container p-4 shadow mb-2">
      <Link
        to="/"
        className="logo text-2xl sm:text-3xl sm:text-center sm:block sm:mb-2"
      >
        My Recipes{" "}
        <span role="img" aria-label="plate with spoon">
          🍽️
        </span>
      </Link>
      <nav className="navbar sm:text-center">
        <NavLink to="/">Home</NavLink>
        <NavLink to="recipes/">Recipes</NavLink>
        {isAuthenticated ? (
          <>
            <NavLink to="recipes/add-new" className="hidden sm:inline">
              Add Recipes
            </NavLink>
            <button
              onClick={() => dispatch(logout())}
              className="bg-blue-500 text-white px-2 py-1 rounded mt-2"
            >
              Logout
            </button>
          </>
        ) : (
          <NavLink to="login" className="mt-2">
            Login
          </NavLink>
        )}
      </nav>
    </header>
  );
};

export default Header;
