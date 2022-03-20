import React from "react";
import logo from "./images/logo.png";

export default function Navbar() {
  return (
    <nav className="nav">
      <img src={logo} alt="logo" />
      <h3 className="nav-title">my travel journal.</h3>
    </nav>
  );
}
