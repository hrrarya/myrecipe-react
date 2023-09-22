import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// root layout
import App from "./App.jsx";
// pages
import Home from "./pages/Home.jsx";
import Recipes from "./pages/Recipes/index.jsx";
import AllRecipes from "./pages/Recipes/AllRecipes";
import AddNewRecipe from "./pages/Recipes/AddNewRecipe";
import { Provider } from "react-redux";
import store from "./redux/store";
import SingleCategoryRecipe from "./components/page-components/SingleCategoryRecipe";
import SingleRecipe from "./pages/Recipes/SingleRecipe";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    exact: true,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "recipes",
        element: <Recipes />,
        children: [
          {
            index: true,
            element: <AllRecipes />,
          },
          {
            path: ":id",
            element: <SingleRecipe />,
          },
          {
            path: "add-new",
            element: <AddNewRecipe path="add-new"/>,
          },
          {
            path: "edit/:id",
            element: <AddNewRecipe path="edit"/>,
          },
          {
            path: "category/:slug",
            element: <SingleCategoryRecipe />,
            // loader: getSingleCategoryRecipes
          },
        ],
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
