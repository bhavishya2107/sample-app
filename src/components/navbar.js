import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      (
      <nav className="navbar navbar-expand-sm navbar-dark fixed-top bg-dark">
        <div className="container">
          <NavLink to="#" className="navbar-brand">
            Sample
          </NavLink>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      )
    </>
  );
}
