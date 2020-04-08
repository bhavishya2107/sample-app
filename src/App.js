import React from "react";
import Users from "./components/users";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import LoginNavbar from "./components/loginNavbar";
import Login from "./components/login";
import UserPage from "./components/userPage";
import AddUser from "./components/addUser";
import "./App.css";

function App() {
  return (
    <>
      {!localStorage.userData ? <Navbar /> : <LoginNavbar />}
      <Switch>
        <Route exact path="/">
          <Users />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/addUser">
          <AddUser />
        </Route>
        <Route exact path="/userPage">
          <UserPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
