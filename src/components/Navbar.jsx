import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg" id="navbar">
      <Link className="navbar-brand" to="/">
        Movie Finder
      </Link>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/search" className="nav-link">
            Search
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
