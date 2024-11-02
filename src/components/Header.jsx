import logo from "../assets/investment-Calculator-logo.png";
import React from "react";

export default function Header() {
  return (
    <header id="header">
      <img src={logo} alt="LOGO" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
