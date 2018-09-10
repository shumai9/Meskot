import React, { Component } from 'react';
import BrowserRouter from 'react-router'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <div className="nav">
            <ul>
              <li>HOME</li>
              <li>ABOUT</li>
              <li>TIMELINE</li>
              <li>EDUCATION</li>
              <li>EXPERIENCE</li>
              <li>PROJECTS</li>
              <li>BLOG</li>
              <li>CONTACT</li>
            </ul>
            </div>
          <h1 className="App-title">Heya! I AM SHUMBAHRI </h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
