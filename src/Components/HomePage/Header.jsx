import "./header.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = function () {
  const [linkVal, setLinkVal] = useState("home");

  const activeHandler = (buttonVal) => {
    setLinkVal((currVal) => buttonVal);
    console.log(buttonVal);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">

<div className="container-fluid">
      <NavLink className="nav-link navbar-brand" to="/home">
        Brand
      </NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
      data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" 
      aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
      <div
        className="collapse navbar-collapse"
        id="navbarNav"
      >
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink
              className={`nav-link ${linkVal === "home" ? "active" : ""}`}
              onClick={() => activeHandler("home")}
              to="/home"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={`nav-link ${
                linkVal === "bike-listing-page" ? "active" : ""
              }`}
              onClick={() => activeHandler("bike-listing-page")}
              to="/bike-listing-page"
            >
              Bikes
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={`nav-link ${linkVal === "about" ? "active" : ""}`}
              onClick={() => activeHandler("about")}
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
              <div className="dropdown">
                <button
                  className="nav-link dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <NavLink className="dropdown-item" to="/support">
                    Support
                  </NavLink>
                  <NavLink className="dropdown-item" to="/contact-us">
                    Contact-Us
                  </NavLink>
                  <NavLink className="dropdown-item" to="/terms-conditions">
                    T&C
                  </NavLink>
                </div>
              </div>
            </li>
        </ul>
        <form className="d-flex ms-3">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>    
      </div> 
    </nav>

    
  );
};

export default Header;
