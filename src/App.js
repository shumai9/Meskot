import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import logo from './shuma.svg';
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
              <li><Link to={"/education"}>EDUCATION</Link></li>
              <li><Link to={"/experience"}>EXPERIENCE</Link></li>
              <li><Link to={"/projects"}>PROJECTS</Link></li>
              <li><Link to={"/blog"}>BLOG</Link></li>
              <li><Link to={"/contact"}>CONTACT</Link></li>
            </ul>
            </div>
          <h1 className="App-title">Heya! I AM SHUMBAHRI </h1>
        </header>
        <div className="main route">
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="timeline" component={TIMELINE} />
          <Route exact path="/education" component={EDUCATION} />
          <Route exact path="/experience" component={EXPERIENCE} />
          <Route exact path="projects" component={PROJECTS} />
          <Route exact path="/blog" component={BLOG} />
          <Route exact path="/contact" component={CONTACT} />


          <p className="App-intro">Yay!!! You made it to my Web site Welcome</p>
       
        </div>
      </div>
    </Router>
    );
  }
}

export default App;
