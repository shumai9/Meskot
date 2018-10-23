import React from 'react';
import { Link} from 'react-router-dom';
import logo from '../shuma.svg';
import './nav.css';

class Nav extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
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
            <nav className={`nav-bar ${ this.state.scroll > this.state.top ? "sticky" : "" }`}>
                <Link to={"/"}><img src={logo} className="App-logo" alt="logo" /></Link>
                <Link to={"/"}><h6>HOME</h6></Link>
                <Link to={"/about"}><h6>ABOUT</h6></Link>
                <Link to={"/timeline"}><h6>TIMELINE</h6></Link>
                <Link to={"/projects"}><h6>PROJECTS</h6></Link>
                <Link to={"/contact"}><h6>CONTACT</h6></Link>
            </nav>
        );
    }
}

export default Nav;
  