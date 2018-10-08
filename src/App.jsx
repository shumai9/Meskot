import React, { Component } from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom'

import Home from './components/home.jsx';
import About from './components/about.jsx';
import Timeline from './components/timeline.jsx';
import Profile from './components/profile.jsx';
import Contact from './components/contact.jsx';
import Nav from './components/nav.jsx';

import './App.css';

class App extends Component {
  render() {

  
    return (
      <Router>
      <div className="App">
      <Nav/>          
        <header className="App-header">
                   
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
