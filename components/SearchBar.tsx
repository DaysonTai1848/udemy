// import React from "react";
// import { CiSearch } from "react-icons/ci";

// const SearchBar = () => {
//   return (
//     <form className="flex flex-row w-auto border py-2 px-4 justify-center items-center border-black rounded-full space-x-3">
//       <CiSearch className="hover:" />
//       <input
//         className="focus:outline-none text-sm font-light text-slate-900"
//         placeholder="Search for anything"
//       />
//     </form>
//   );
// };

// export default SearchBar;

// SearchBar.tsx
import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <form className="flex flex-grow w-full max-w-lg border py-2 px-4 justify-center items-center border-black rounded-full space-x-3">
      <CiSearch className="hover:" />
      <input
        className="flex-grow focus:outline-none text-sm font-light text-slate-900 w-full"
        placeholder="Search for anything"
      />
    </form>
  );
};

export default SearchBar;
