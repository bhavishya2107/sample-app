import React from "react";
import Users from "./components/users";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import LoginNavbar from "./components/loginNavbar";
import Login from "./components/login";
import UserPage from "./components/userPage";
import AddUser from "./components/addUser";
import "./App.css";

function adminRoutes() {
  return (
    <>
    <LoginNavbar />
      <Switch>
        <Route exact path="/users">
          <Users />
        </Route>
        <Route exact path="/addUser">
          <AddUser />
        </Route>
        <Route path="*" >
        <h1 className="container pt-5">Error 404 cannot access this route</h1>
        </Route>
      </Switch>
    </>
  );
}

function userRoutes() {
  return (<>
    <LoginNavbar />
    <Switch>
        <Route exact path="/userPage">
          <UserPage />
        </Route>
        <Route path="*" >
        <h1 className="container pt-5">Error 404 cannot access this route</h1>
        </Route>
      </Switch>
      </>
  );
}

function App() {
  return (
    <>
      {!localStorage.userData ? (
        <>
          <Navbar />
          <Route exact path="/">
            <Login />
          </Route>{" "}
        </>
      ) : (
        JSON.parse(localStorage.userData).updateUser.email === "admin@admin.com" ? 
        adminRoutes() : userRoutes()
      )}
    </>
  );
}

export default App;
