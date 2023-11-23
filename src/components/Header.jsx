import React from "react";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <Link className="navbar-title" to="/">
        Writealy
      </Link>
      <Link className="navbar-section" to="/product">
        {" "}
        Product -{" "}
      </Link>
      <Link className="navbar-section navbar-elements" to="/usecase">
        {" "}
        Use Cases -{" "}
      </Link>
      <Link className="navbar-section navbar-elements" to="/pricing">
        {" "}
        Pricing{" "}
      </Link>
      <Link className="navbar-section navbar-elements" to="/pricing">
        {" "}
        Customers{" "}
      </Link>
      <Link className="navbar-section navbar-elements" to="/pricing">
        {" "}
        Resources -{" "}
      </Link>
      <button className="signin-btn">Sign in</button>
    </div>
  );
};

export default Header;
