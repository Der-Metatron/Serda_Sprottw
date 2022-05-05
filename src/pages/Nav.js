import { NavLink } from "react-router-dom";
import React from "react";

export const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Liste</NavLink>{" "}
        </li>
        <li>
          <NavLink to="/form">Formular</NavLink>{" "}
        </li>
      </ul>
    </nav>
  );
};
