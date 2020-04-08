import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.email = React.createRef(null);
    this.password = React.createRef(null);
    this.state = {
      msg: "",
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: this.email.current.value,
      password: this.password.current.value,
    };
    axios
      .post("https://sample-app-2107.herokuapp.com/api/users/login", user)
      // .then(res => console.log(res.data))
      .then((res) => {
        res.data.msg
          ? this.setState({ msg: res.data.msg })
          : localStorage.setItem("userData", JSON.stringify(res.data));
        return res.data.updateUser;
      })

      .then((updateUser) => {
        if (updateUser) {
          console.log(updateUser);
          updateUser.email === "admin@admin.com"
            ? (window.location.href = "/users")
            : (window.location.href = "/userPage");
        }
      });
  };

  render() {
    console.log(this.state && this.state);
    return (
      <>
        <div>
          <div className="container pt-5">
            <div className="row pt-5">
              <div className="col-md-8 m-auto">
                <h5 className="display-4 margin_top ">Login</h5>

                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="Email Address"
                      name="email"
                      ref={this.email}
                      onFocus={() =>
                        this.setState({
                          msg: "",
                        })
                      }
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
                    <input type="submit" className="btn btn-lg btn-dark" />
                  </div>
                  <p>{this.state.msg}</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Login);
