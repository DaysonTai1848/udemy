import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <form className="flex flex-row border py-2 px-4 justify-center items-center border-black rounded-full space-x-3">
      <CiSearch className="hover:" />
      <input
        className="focus:outline-none text-sm font-light text-slate-900"
        placeholder="Search for anything"
      />
    </form>
  );
};

export default SearchBar;
