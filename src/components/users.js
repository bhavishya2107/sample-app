import React, { Component } from "react";
import axios from "axios";
import LoginNavbar from "./loginNavbar";
import { Link, withRouter } from "react-router-dom";

class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: null,
      render: false,
    };
  }

  componentDidMount() {
    axios.get("https://sample-app-2107.herokuapp.com/api/users").then((res) =>
      this.setState({
        users: res.data.user,
      })
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.render !== this.state.render){
    axios.get("https://sample-app-2107.herokuapp.com/api/users").then((res) =>
      this.setState({
        users: res.data.user,
      })
    );}
  }
  

  addUser = () => {
    axios
      .post("https://sample-app-2107.herokuapp.com/api/users")
      .then((res) => console.log(res));
  };

  loginToggle = (id, disable) => {
    console.log("working");
    if (disable) {
      axios
        .delete(`https://sample-app-2107.herokuapp.com/api/users/${id}`)
        .then((res) => {
          this.setState({
            render: !this.state.render,
          });
          console.log(res);
        });
    } else if (!disable) {
      axios
        .post(`https://sample-app-2107.herokuapp.com/api/users/${id}`)
        .then((res) => {
          this.setState({
            render: !this.state.render,
          });
          console.log(res);
        });
    }
  };

  render() {
    console.log(this.state);

    return (
      <>
        <div className="container pt-5">
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Last Active</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users &&
                this.state.users.map((user) => {
                  return (
                    <tr>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.password}</td>
                      <td>
                        {user.lastActive
                          ? ("" + user.lastActive).substr(0, 21)
                          : "NA"}
                      </td>
                      <td>
                        <div className="custom-control custom-switch">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id={user._id}
                            onChange={() =>
                              this.loginToggle(user._id, user.disable)
                            }
                            checked={!user.disable}
                          />
                          <label
                            className="custom-control-label"
                            htmlFor={user._id}
                          ></label>
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <div>
            <Link to="/addUser" className="pb-5">
              <button className="btn btn-dark">Add User</button>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Users);
