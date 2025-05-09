import React from "react";
import { appleImg } from "../utils";
const Navbar = () => {
  return (
    <header>
      <nav>
        <img src={appleImg} alt="apple_logo" />
      </nav>
    </header>
  );
};

export default Navbar;
