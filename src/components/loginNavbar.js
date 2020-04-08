import React, { Component } from "react";
import { Link } from "react-router-dom";

class LoginNavbar extends Component {
  logout() {
    localStorage.clear();
    window.location.href = "/login";
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <div className="container">
            <Link to="#" className="navbar-brand">
              Sample
            </Link>

            <div className="collapse navbar-collapse" id="mobile-nav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link onClick={this.logout} className="nav-link">
                    <img
                      className="rounded-circle"
                      style={{ width: "25px", marginRight: "5px" }}
                      src="https://www.gravatar.com/avatar/anything?s=200&d=mm"
                      alt=""
                      title="You must have a Gravatar connected to your email to display an image"
                    />{" "}
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default LoginNavbar;
