import React, { Component } from "react";
import { Link } from "react-router-dom";

class UserPage extends Component {
  constructor() {
    super();
    this.state = {
      userData: JSON.parse(localStorage.userData),
    };
  }

  render() {
    console.log(this.state.userData);
    return (
      <div className="container pt-5 text-center">
        <table class="table mt-5">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.userData.updateUser.name}</td>
              <td>{this.state.userData.updateUser.email}</td>
              <td>{this.state.userData.updateUser.password}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserPage;
