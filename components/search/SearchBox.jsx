"use client";

import React, { useEffect, useState } from "react";
import { Results } from "../results/Results";

const getSearch = async (query) => {
  const data = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
  );
  const res = await data.json();
  return res;
};

const SearchBox = () => {
  const [search, setSearch] = useState();
  const [meals, setMeals] = useState([]);

  const formHandler = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const doSearch = setTimeout(() => {
      getSearch(search).then((data) => setMeals(data));
    }, 2500);

    if (search !== null) {
      doSearch;
    }

    return () => {
      clearTimeout(doSearch);
    };
  }, [search]);

  return (
    <>
      <div className=" capitalize w-1/2 m-auto my-32 rounded-sm text-cyan-900 p-2 box-border">
        <form
          onSubmit={formHandler}
          className="flex w-full justify-center items-center"
        >
          <input
            className=" flex-1 border-2 p-2 box-border focus:outline-offset-0 shadow-lg hover:border-orange-300"
            type="text"
            value={search}
            placeholder="search for a receipe name ..."
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button
            className="bg-slate-900 text-white inline-block transition-all p-2 px-4 shadow-lg hover:bg-orange-400"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>

      <Results meals={meals} />
    </>
  );
};

export default SearchBox;
