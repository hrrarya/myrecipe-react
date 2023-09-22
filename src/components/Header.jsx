import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logout } from "../redux/authentication.reducer";

const Header = ({ isAuthenticated }) => {
  const dispatch = useDispatch();

  return (
    <header className="flex justify-between items-center recipe-container p-4 shadow mb-2">
      <Link to="/" className="logo text-2xl sm:text-lg">
        My Recipes{" "}
        <span role="img" aria-label="plate with spoon">
          🍽️
        </span>
      </Link>
      <nav className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="recipes/">Recipes</NavLink>
        <NavLink to="recipes/add-new" className="hidden sm:inline-block">
          Add Recipes
        </NavLink>
        {isAuthenticated ? (
          <button
            onClick={() => dispatch(logout())}
            className="bg-blue-500 text-white px-2 py-1 rounded"
          >
            Logout
          </button>
        ) : (
          <NavLink to="login" className="">
            Login
          </NavLink>
        )}
      </nav>
    </header>
  );
};

export default Header;
