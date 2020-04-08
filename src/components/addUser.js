import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import LoginNavbar from "./loginNavbar";
import Header from "./navbar";

export default class Register extends Component {
  constructor() {
    super();
    this.email = React.createRef(null);
    this.username = React.createRef(null);
    this.password = React.createRef(null);
  }

  handleSignup = (e) => {
    e.preventDefault();
    const newUser = {
      name: this.username.current.value,
      email: this.email.current.value,
      password: this.password.current.value,
    };
    axios
      .post("https://sample-app-2107.herokuapp.com/api/users", newUser)
      .then((user) => console.log(user))
      .then((res) => (window.location.href = "/users"))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <>
        <div className="container pt-5">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h3 className=" margin_top">Add User</h3>
              <div className="d-flex">
                <Link to="/" className="pl-1 pb-1">
                  back
                </Link>
              </div>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Name"
                    name="username"
                    ref={this.username}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email Address"
                    name="email"
                    ref={this.email}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    name="password"
                    ref={this.password}
                  />
                </div>
                <div className="">
                  <input
                    onClick={this.handleSignup}
                    type="submit"
                    className="btn btn-lg btn-success"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
