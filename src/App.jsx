import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom'
import logo from './shuma.svg';
import Home from './components/home.jsx';
import About from './components/about.jsx';
import Timeline from './components/timeline.jsx';
import Profile from './components/profile.jsx';
import Contact from './components/contact.jsx'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <div className="nav">
            <ul>
              <li><Link to={"/"}>HOME</Link></li>
              <li><Link to={"/about"}>ABOUT</Link></li>
              <li><Link to={"/timeline"}>TIMELINE</Link></li>
              <li><Link to={"/profile"}>PROFILE</Link></li>
              <li><Link to={"/contact"}>CONTACT</Link></li>
            </ul>
            </div>
          <h1 className="App-title">Heya! I AM SHUMBAHRI </h1>
        </header>
        <div className="main route">
          <Route exact path="/" component={Home} />
          <Route  path="/about" component={About} />
          <Route  path="/timeline" component={Timeline} />
          <Route  path="/contact" component={Contact} />
          <Route  path="/profile" component={Profile} />  
        </div>
      </div>
    </Router>
    );
  }
}

export default App;
