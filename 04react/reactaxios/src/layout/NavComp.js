import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavComp() {
  return (
    <nav>
      <h1>logo</h1>
      <ul>
        <li>
          <NavLink to="/" />
          home
        </li>
        <li>
          <NavLink to="/about" />
          about
        </li>
        <li>
          <NavLink to="/products" />
          product
        </li>
      </ul>
    </nav>
  );
}

export default NavComp;
