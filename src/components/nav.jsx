import React from 'react';
import { Link} from 'react-router-dom';
import logo from '../shuma.svg';
import './nav.css';

class Nav extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }  
    
    handler = () => {
        var content = document.querySelector('.main');       
        content.scrollIntoView({behavior: "smooth"});
    }

    handleScroll = () => {
        this.setState({ scroll: window.scrollY});
    }

    componentDidMount(){
        const bar = document.querySelector('nav');
        
        this.setState({ 
            top: bar.offsetTop, height: bar.offsetHeight
        });
        
        window.addEventListener('scroll', this.handleScroll );
       
    }
    
    componentDidUpdate() {
        this.state.scroll > this.state.top ? document.body.style.Top = 
        `${this.state.height}px` : document.body.style.Top = 0;
    }
       
    render () {  
        return(
            <nav className={`nav-bar ${ this.state.scroll > this.state.top ? "sticky" : "" }`} onClick={this.handler}>
                <Link to={"/"}><img src={logo} className="App-logo" alt="logo" /></Link>
                <Link to={"/"}>HOME</Link>
                <Link to={"/about"}>ABOUT</Link>
                <Link to={"/timeline"}>TIMELINE</Link>
                <Link to={"/projects"}>PROJECTS</Link>
                <Link to={"/contact"}>CONTACT</Link>
            </nav>
        );
    }
}

export default Nav;
  