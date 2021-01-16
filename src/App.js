import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';
import React from 'react';
import logo from './logo.svg';
import './App.css';

// import the screens
import CreateProject from './screens/CreateProject';
import HomePage from './screens/HomePage';
import ProjectPage from './screens/ProjectPage';
import UserDashboard from './screens/UserDashboard';
import Login from './screens/Login';

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hack The North
        </a>
      </header>

      <Router>
    <div>
          <h2> Welcome to our page, folks! </h2>
          <nav>
          <ul>
            <li><Link to={'/'} > HomePage </Link></li>
            <li><Link to={'/login'} >Login</Link></li>
            <li><Link to={'/createproject'} > CreateProject </Link></li>
            <li><Link to={'/project'} > Projects </Link></li>
            <li><Link to={'/dashboard'} > Dashboard </Link></li>
          </ul>
          </nav>
          <Switch> 
                <Route path = "/" exact component = {HomePage}></Route>
                <Route path = "/login" component = {Login}></Route>
                <Route path = "/createProject" component = {CreateProject}></Route>
                <Route path = "/project" component = { ProjectPage}></Route>
                <Route path = "/dashboard" component  = { UserDashboard}></Route>
          </Switch>
    </div>
    </Router>
      

    </div>
  );
}

export default App;
