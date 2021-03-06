import React from "react";
import { Route, Redirect, Link, NavLink } from "react-router-dom";

const MovieNav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <Link className="navbar-brand" to="/">
        Vidly
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav" 
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse container-fluid " id="navbarNav">
        <ul className="navbar-nav ">
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
    </nav>
  );
};

export default MovieNav;
