import React, { Component} from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
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
  constructor (props) {
    super(props);
    this.state = {
      currentWidth: window.innerWidth
    };
    
    console.warn('From app',);
    this.handleDevice = () => {
      this.setState ({currentWidth: window.innerWidth});
    }
  }
  
  componentDidMount () {
    window.addEventListener ('resize', this.handleDevice ); 
  }
  componentDidCatch(error) {
    console.log('loged error', error.message);
  }
  
  render() {
    return (
      <MuiThemeProvider>
        <Router >
          <div className="App" >
            <header className="App-header">
              <h1 className="App-title"> Shumai's Site, ...Coming soon </h1>
              <p id="intro">You reached Shumai's home page. That means you have come a very long way
                  from the very vast and deep world wide web.</p>
                  { this.state.currentWidth >= 960 ?  <Nav /> : <Option 
                  handleClose = {this.handleClose} handleOpen = {this.handleOpen}/> }
            </header>                
            <div className="main route" data={json.home}>
              <aside>
                <div className="LI-profile-badge"  data-version="v1" data-size="medium" 
                  data-locale="en_US" data-type="vertical" data-theme="light" 
                  data-vanity="soazd1">
                  <a className="LI-simple-link" href='https://uk.linkedin.com/in/soazd1?
                  trk=profile-badge'> Shumai Araya</a>
                </div>
              </aside>        
                <Route 
                  exact path="/"
                  render= {
                    (props) => <Home {...props} data={json.home} /> 
                  }
                />
              <Route  
                path="/about"
                render={
                  (props) => <About {...props} data={json.about}/>
                } 
              />
              <Route
                path="/timeline"
                render={
                  (props) => <Timeline {...props} data={json.timeline} />
                }
              />
              <Route
                path="/contact"
                render={
                  (props) => <Contact {...props} data={json.contact} />
                }
              />
              <Route
                path="/projects"
                render={
                  (props) => < Projects {...props} data={json.projects}/>
                }
              /> 
            </div>       
            <Footer/>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
 