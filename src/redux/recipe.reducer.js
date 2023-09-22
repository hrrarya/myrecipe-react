import { createSlice } from "@reduxjs/toolkit";
import { defaultRecipes } from "../helper/data";
const recipes = localStorage.getItem("recipes");
// console.log(JSON.parse(recipes));

export const recipeSlice = createSlice({
  name: "recipes",
  initialState: recipes ? JSON.parse(recipes) : defaultRecipes,
  reducers: {
    add_new: (state, { type, payload }) => {
      const recipe = { id: state.length, ...payload };
      state.push(recipe);
      localStorage.setItem("recipes", JSON.stringify(state));
    },
    edit: (state, { type, payload }) => {
      const newState = [...state];
      const index = newState.findIndex((item) => item.id === payload.id);
      if (index > -1) {
        newState[index] = payload;
        localStorage.setItem("recipes", JSON.stringify(newState));
        return newState;
      }
    },
    remove: (state, { type, payload }) => {
      // console.log(payload);
      const newState = [...state];
      const index = newState.findIndex((item) => item.id === +payload);
      if (index > -1) {
        newState.splice(index, 1);
        localStorage.setItem("recipes", JSON.stringify(newState));
        return newState;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { add_new, edit, remove } = recipeSlice.actions;

export default recipeSlice.reducer;
