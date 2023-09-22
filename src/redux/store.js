import { configureStore } from "@reduxjs/toolkit";
import recipeSlice from "./recipe.reducer";
import authenticationSlice from "./authentication.reducer";

export default configureStore({
  reducer: {
    recipes: recipeSlice,
    authentication: authenticationSlice,
  },
});
