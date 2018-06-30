import React from "react";
// import Link from "gatsby-link";

import logo from "../../assets/logo.png";
import "./index.css";

const Header = () => (
  <div styleName="header">
    <img styleName="logo" src={logo} alt="logo" />
  </div>
);

export default Header;
