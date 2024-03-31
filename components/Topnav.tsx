import React from "react";
import LoginButton from "./LoginButton";
import SignUpButton from "./SignUpButton";
import UdemyLogo from "./UdemyLogo";
import SearchBar from "./SearchBar";

const Topnav = () => {
  return (
    <div className="flex flex-row py-3 px-5 justify-between shadow-md border items-center">
      <UdemyLogo />
      <SearchBar />
      <LoginButton />
      <SignUpButton />
    </div>
  );
};

export default Topnav;
