import { NavLink } from "react-router-dom";
import React from "react";

export const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>{" "}
        </li>
        <li>
          <NavLink to="/form">Form</NavLink>{" "}
        </li>
      </ul>
    </nav>
  );
};
