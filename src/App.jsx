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
// import Canvas from './components/canvas.jsx';
import json from './data/data.json';
import './style/App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import anime from 'animejs/lib/anime.es.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWidth: window.innerWidth,
      menuIsOpen: false
    };
    this.handleDeviceWidth = () => {
      this.setState({ currentWidth: window.innerWidth });
    };
    this.toggleOptionsMenu = () => {
      this.setState({ menuIsOpen: !this.state.menuIsOpen });
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
    if (badge.style.transform === 'translate3d(-15vw, 0px, 0px)') {
      anime({
        targets: badgeIcon,
        translateX: 25,
        rotate: '1turn',
        duration: 800
      });
      badge.style.transform = 'translate3d(-170vw, 0px, 0px)';
      badge.style.transition = 'transform .5s cubic-bezier(0, .52, 0, 1)';
      badgeIcon.style.display = '';
    } else {
      anime({
        targets: badgeIcon,
        translateX: 0,
        rotate: '1turn',
        duration: 800
      });
      badge.style.transform = 'translate3d(-15vw, 0px, 0px)';
      badgeIcon.style.display = 'none';
    }
  };
  componentDidMount() {
    window.addEventListener('resize', this.handleDeviceWidth);
  }
  componentDidCatch(error) {
    console.log('logged error', error.message);
  }

  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div className="App">
            <header id="landing" className="App-header">
              {/* <Canvas/> */}
              <h1 className="App-title">
                Hey, I'm Shumai, <br />
                Full-Stack Software Developer.
              </h1>
              {/* <button type="submit">   CTA   </button> */}
              {this.state.currentWidth >= 960 ? (
                <Nav />
              ) : (
                <Option
                  menuIsOpen={this.state.menuIsOpen}
                  onMenuToggle={this.toggleOptionsMenu}
                />
              )}
            </header>
            <div className="main route">
              <aside>
                <h2>More of me</h2>
                <span onClick={this.badgeHandler}>
                  <img
                    className="icon close"
                    src="/assets/cross-icon.svg"
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
              <Route
                exact
                path="/"
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
            <Footer data={json} />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
