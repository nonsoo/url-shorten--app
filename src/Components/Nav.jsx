import React from "react";

import Btn from "./Interactive/Btn";

import Logo from "../imgs/logo.svg";

const Nav = () => {
  return (
    <nav className="Nav">
      <div className="NavLeft">
        <img src={Logo} alt="logo" className="Nav__Logo" />
        <div className="NavLinks">
          <p className="NavLinks__Items">Features</p>
          <p className="NavLinks__Items">Pricing</p>
          <p className="NavLinks__Items">Resources</p>
        </div>
      </div>
      <div className="NavRight">
        <p className="NavLinks__Items">Login</p>
        <Btn btnName="Sign Up" />
      </div>
    </nav>
  );
};

export default Nav;
