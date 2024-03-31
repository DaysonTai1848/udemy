import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <form className="flex flex-row border py-2 px-4 justify-center items-center border-black rounded-full">
      <CiSearch className="hover:" />
      <input className="border-none"></input>
    </form>
  );
};

export default SearchBar;
