import React from "react";
import LoginButton from "./LoginButton";
import SignUpButton from "./SignUpButton";
import UdemyLogo from "./UdemyLogo";
import SearchBar from "./SearchBar";
import CategoriesDropdown from "./CategoriesDropdown";
import Dropdowns from "./Dropdowns";

const Topnav = () => {
  return (
    <div className="flex flex-row py-3 px-5 justify-between shadow-md border space-x-4 items-center">
      <UdemyLogo />
      <CategoriesDropdown />
      <SearchBar />
      <Dropdowns />
      <LoginButton />
      <SignUpButton />
    </div>
  );
};

export default Topnav;
