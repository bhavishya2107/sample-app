import React from "react";
import { NavLink, Link } from "react-router-dom";
import LoginNavbar from "./loginNavbar";

export default function Header() {
  return (
    <>
      {Boolean(localStorage.isLoggedIn) ? (
        <LoginNavbar />
      ) : (
        <nav className="navbar navbar-expand-sm navbar-dark fixed-top bg-dark">
          <div className="container">
            <NavLink to="#" className="navbar-brand">
              Sample
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#mobile-nav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="mobile-nav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink to="/register" className="nav-link">
                    Sign Up
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/login" className="nav-link">
                    Login
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}
