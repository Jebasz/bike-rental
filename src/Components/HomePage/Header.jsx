import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import brand from "./../../Images/Brandie.jpeg";
import "./header.css";

const Header = function () {
  const [linkVal, setLinkVal] = useState("home");
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const activeHandler = (buttonVal) => {
    setLinkVal(buttonVal);
    console.log(buttonVal);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container-fluid">
        <NavLink className="nav-link navbar-brand" to="/home">
          <img src={brand} alt="logo" style={{ width: '50px', height: 'auto' }} />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
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
                className={`nav-link ${linkVal === "bike-listing-page" ? "active" : ""}`}
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
                to="/about-bike-quick"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={`nav-link ${linkVal === "more" ? "active" : ""}`}
                onClick={() => {
                  activeHandler("more");
                  handleShow();
                }}
                to="more"
              >
                More
              </NavLink>
            </li>
            <li className="nav-item">
              <Button
                className={`btn ${linkVal === "login" ? "btn-active" : "btn-secondary"}`}
                onClick={() => {
                  activeHandler("login");
                }}
                as={NavLink}
                to="/login"
              >
                Login
              </Button>
            </li>
          </ul>
        </div>
      </div>

      {/* Modal Component */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Body className="text-center">
          <NavLink className="dropdown-item" to="/support" onClick={handleClose}>
            Support
          </NavLink>
          <NavLink className="dropdown-item" to="/contact-us" onClick={handleClose}>
            Contact-Us
          </NavLink>
          <NavLink className="dropdown-item" to="/terms-conditions" onClick={handleClose}>
            T&C
          </NavLink>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </nav>
  );
};

export default Header;
