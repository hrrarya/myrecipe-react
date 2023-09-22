import { useState } from "react";

const SearchRecipes = ({ _handleSearch }) => {
  return (
    <section className="recipe-search mb-4 ">
      <form>
        <div className="flex flex-col space-y-1 items-center">
          <input
            type="email"
            id="email"
            autoFocus
            className="px-2 py-2 w-2/3 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
            placeholder="Search recipes...."
            onChange={_handleSearch}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchRecipes;
