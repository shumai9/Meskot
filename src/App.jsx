import React, { Component} from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom'
import Home from './components/home.jsx';
import About from './components/about.jsx';
import Timeline from './components/timeline.jsx';
import Projects from './components/projects.jsx';
import Contact from './components/contact.jsx';
import Nav from './components/nav.jsx';
import Footer from './components/footer.jsx';
import Option from './components/option.jsx';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentWidth: window.visualViewport.width
    };
  }
  handleDevice= () => {
    this.setState ({currentWidth: window.innerWidth})
  }
  componentDidMount () {
    window.addEventListener ('resize', this.handleDevice ); 
  }
  
   render() {
    
    return (
      <Router>
      <div className="App" > 
        <header className="App-header">
          
          <h1 className="App-title"> Shumai's Site, ...Coming soon </h1>
          <p id="intro">You reached Shumai's home page. That means you have come a very long way
              from the very vast and deep world wide web.
          </p>
           { this.state.currentWidth >= 960 ?  <Nav /> : <Option/> }  
        </header>                
        <div className="main route">        
          <Route exact path="/" component={Home} />
          <Route  path="/about" component={About} />
          <Route  path="/timeline" component={Timeline} />
          <Route  path="/contact" component={Contact} />
          <Route  path="/projects" component={Projects} />  
        </div>        
       <Footer/>
      </div>
    </Router>
    );
  }
}

export default App;
 