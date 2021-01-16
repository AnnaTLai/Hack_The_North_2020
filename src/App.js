import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import React from 'react';
import './App.css';

// import the screens
import CreateProject from './screens/CreateProject';
import HomePage from './screens/HomePage';
import ProjectPage from './screens/ProjectPage';
import UserDashboard from './screens/UserDashboard';
import Login from './screens/Login';

function App() {
  return (
    <Router>
      <div>
        <div className="navbar">
          <h2> Welcome to our page, folks! </h2>
          <nav className="navbar-elements">
            <ul className="links">
              <li><Link to={'/'}> HomePage </Link></li>
              <li><Link to={'/createproject'}> CreateProject </Link></li>
              <li><Link to={'/project'} > Projects </Link></li>
              <li><Link to={'/dashboard'} > Dashboard </Link></li>
              <li><Link to={'/login'} ><button>Login</button></Link></li>
            </ul>
          </nav>
        </div>
        <Switch> 
              <Route path = "/" exact component = {HomePage}></Route>
              <Route path = "/login" component = {Login}></Route>
              <Route path = "/createProject" component = {CreateProject}></Route>
              <Route path = "/project" component = { ProjectPage}></Route>
              <Route path = "/dashboard" component  = { UserDashboard}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
