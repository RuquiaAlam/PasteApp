import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="gap-4 flex mt-5 ml-5">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to="/pastes"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Paste
      </NavLink>
      <NavLink
        to="/viewPastes/:id"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        ViewPaste
      </NavLink>
    </div>
  );
};

export default Navbar;
