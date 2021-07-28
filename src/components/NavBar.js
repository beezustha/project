import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const token = localStorage.getItem("user-info")
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link exact to="/" className="nav-logo">
            Book My Arena
            <i className="fas fa-futbol"></i>
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/booking"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
           Book Now
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/arena"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
           Arena
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/signUp"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Sign Up
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/login"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Login
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
