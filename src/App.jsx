import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home.jsx';
import About from './components/about.jsx';
import Timeline from './components/timeline.jsx';
import Projects from './components/projects.jsx';
import Contact from './components/contact.jsx';
import Nav from './components/nav.jsx';
import Footer from './components/footer.jsx';
import Option from './components/option.jsx';
import json from './data/data.json';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWidth: window.innerWidth
    };
    console.warn('From app');
    this.handleDevice = () => {
      this.setState({ currentWidth: window.innerWidth });
    };
    this.setTitle = this.setTitle.bind(this);
  }
  setTitle = () => {
    let routeEl = document.getElementsByClassName('route');
    document.title = `Meskot ${'|' + routeEl[0].lastChild.className}`;
  };
  componentDidMount() {
    window.addEventListener('resize', this.handleDevice);
  }
  componentDidCatch(error) {
    console.log('loged error', error.message);
  }
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">
                Hey, I'm <br /> Shumai
              </h1>
              <p id="intro">Welcome! to my site</p>
              {this.state.currentWidth >= 960 ? (
                <Nav />
              ) : (
                <Option
                  handleClose={this.handleClose}
                  handleOpen={this.handleOpen}
                />
              )}
            </header>
            <div className="main route">
              <aside>
                <h2>More of me</h2>
                <div
                  className="LI-profile-badge"
                  data-version="v1"
                  data-size="medium"
                  data-locale="en_US"
                  data-type="vertical"
                  data={json.home}
                  data-theme="light"
                  data-vanity="soazd1"
                >
                  <a
                    className="LI-simple-link"
                    href="https://uk.linkedin.com/in/soazd1?
                  trk=profile-badge"
                  >
                    {' '}
                    Shumai Araya
                  </a>
                </div>
              </aside>
              <Route exact path="/" render={null} />
              <Route
                exact
                path="/home"
                render={props => (
                  <Home {...props} data={json.home} onScroll={this.setTitle} />
                )}
              />
              <Route
                path="/about"
                render={props => (
                  <About
                    {...props}
                    data={json.about}
                    onScroll={this.setTitle}
                  />
                )}
              />
              <Route
                path="/timeline"
                render={props => (
                  <Timeline
                    {...props}
                    data={json.timeline}
                    onScroll={this.setTitle}
                  />
                )}
              />
              <Route
                path="/contact"
                render={props => (
                  <Contact
                    {...props}
                    data={json.contact}
                    onScroll={this.setTitle}
                  />
                )}
              />
              <Route
                path="/projects"
                render={props => (
                  <Projects
                    {...props}
                    data={json.projects}
                    onScroll={this.setTitle}
                  />
                )}
              />
            </div>
            <Footer data={json.projects} />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
