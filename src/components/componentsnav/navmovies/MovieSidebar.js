import React from "react";
import { Link, NavLink } from "react-router-dom";
const MovieSidebar = () => {
  return (
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item p-3 ">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item p-3">
          <NavLink className="nav-link" to="/movies">
            Movies
          </NavLink>
        </li>
        <li className="nav-item p-3">
          <NavLink className="nav-link" to="/products">
            Products
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MovieSidebar;
