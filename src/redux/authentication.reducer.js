import { createSlice } from "@reduxjs/toolkit";

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState: {
    isAuthenticated: localStorage.getItem("recipes_authentication") || false,
  },
  reducers: {
    login: (state, { type, payload }) => {
      if (
        payload.email == "hridoy@wpdeveloper.com" &&
        payload.password == "hridoy"
      ) {
        state.isAuthenticated = true;
        localStorage.setItem("recipes_authentication", true);
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      localStorage.setItem("recipes_authentication", false);
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = authenticationSlice.actions;

export default authenticationSlice.reducer;
