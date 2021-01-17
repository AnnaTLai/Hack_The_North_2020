import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import logo from "./logo.png";
import home from "./home.jpg";
import user from "./profile.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';


// import the screens
import CreateProject from "./screens/CreateProject";
import HomePage from "./screens/HomePage";
import ProjectPage from "./screens/ProjectPage";
import UserDashboard from "./screens/UserDashboard";
import Login from "./screens/Login";

function App() {
  const [login, setLogin] = useState(false);
  const [loginpage, setLoginpage] = useState(false);

  if (login === false) {
    if (loginpage === true) {
      return (
        <Router>
            <Switch>
              <Route path="/" exact component={HomePage}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/createProject" component={CreateProject}></Route>
              <Route path="/project" component={ProjectPage}></Route>
              <Route path="/dashboard" component={UserDashboard}></Route>
            </Switch>
        </Router>
      )
      
    } else {
      return (
        <Router>
          <div>
            <div className="navbar">
              <img src={logo} alt="logo" />
              <form>
                <input
                  input="hidden"
                  placeholder="Search for your next adventure..."
                ></input>
              </form>
              <nav className="navbar-elements">
                <ul className="links">
                  <li>
                    <Link to={"/createProject"}>
                      <button className="launchButton">Launch Project</button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"}>
                      <img src={home} alt="home"></img>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/dashboard"}>
                      <img src={user} alt="user"></img>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/login"}>
                      <button className="loginButton" onClick={() => setLoginpage(true)}>Login</button>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <Switch>
              <Route path="/" exact component={HomePage}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/createProject" component={CreateProject}></Route>
              <Route path="/project" component={ProjectPage}></Route>
              <Route path="/dashboard" component={UserDashboard}></Route>
            </Switch>
          </div>
        </Router>
      );
    }
  } else {
    return (
      <Router>
        <div>
          <div className="navbar">
            <img src={logo} alt="logo" />
            <form>
                <input
                  input="hidden"
                  placeholder="Search for your next adventure..."
                ></input>
              </form>
            <nav className="navbar-elements">
              <ul className="links">
                <li>
                  <Link to={"/createProject"}>
                    <button className="launchButton">Launch Project</button>
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>
                    <img src={home} alt="home"></img>
                  </Link>
                </li>
                <li>
                  <Link to={"/dashboard"}>
                    <img src={user} alt="user"></img>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <Switch>
            <Route path="/" exact component={HomePage}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/createProject" component={CreateProject}></Route>
            <Route path="/project" component={ProjectPage}></Route>
            <Route path="/dashboard" component={UserDashboard}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
