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
import './style/App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWidth: window.innerWidth,
      open: false
    };
    this.handleDevice = () => {
      this.setState({ currentWidth: window.innerWidth });
    };
    this.toggleOptionsMenu = () => {
      if (this.state.open) {
        this.setState({
          open: !this.state.open
        });
      } else {
        this.setState({
          open: !this.state.open
        });
      }
    };
    this.badgeHandler = this.badgeHandler.bind(this);
    this.setTitle = this.setTitle.bind(this);
  }
  setTitle = () => {
    let routeEl = document.querySelector('route');
    document.title = `Meskot ${'|' + routeEl[0].lastChild.className}`;
  };

  badgeHandler = e => {
    let badge = document.querySelector('aside');
    let badgeIcon = document.querySelector('img.badge');

    e.stopPropagation();
    if (badge.style.transform === 'translate3d(0vw, 0px, 0px)') {
      badge.style.transform = 'translate3d(-170vw, 0px, 0px)';
      badge.style.transition = 'transform .5s cubic-bezier(0, .52, 0, 1)';
      badgeIcon.style.display = '';
    } else {
      badge.style.transform = 'translate3d(0vw, 0px, 0px)';
      badgeIcon.style.display = 'none';
    }
  };
  componentDidMount() {
    window.addEventListener('resize', this.handleDevice);
  }
  componentDidCatch(error) {
    console.log('logged error', error.message);
  }
  render() {
    const open = this.state.open;
    return (
      <MuiThemeProvider>
        <Router>
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">
                Hey, I'm <br /> Shumai
              </h1>
              <p id="intro">Welcome! to my site ~ under construction</p>
              {this.state.currentWidth >= 960 ? (
                <Nav />
              ) : (
                <Option
                  open={open}
                  toggleOptionsMenu={this.toggleOptionsMenu}
                />
              )}
            </header>
            <div className="main route">
              <aside>
                <h2>More of me</h2>
                <span onClick={this.badgeHandler}>
                  <img
                    className="aside-close icon"
                    src="/assets/option-close.svg"
                    alt=""
                  />
                </span>
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
              <img
                className="icon badge"
                src="/assets/badge-icon.svg"
                alt=""
                onClick={this.badgeHandler}
              />
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
            <Footer data={json.footer} />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
