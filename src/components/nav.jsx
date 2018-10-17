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
        this.state.scroll > this.state.top ? document.body.style.paddingTop = 
        `${this.state.height}px` : document.body.style.paddingTop = 0;
    }
       
    render () {  
        return(
            <nav className={`${ this.state.scroll > this.state.top ? "sticky" : "" }`}>
                <Link to={"/"}><img src={logo} className="App-logo" alt="logo" /></Link>
                <Link to={"/"}><h4>HOME</h4></Link>
                <Link to={"/about"}><h4>ABOUT</h4></Link>
                <Link to={"/timeline"}><h4>TIMELINE</h4></Link>
                <Link to={"/projects"}><h4>PROJECTS</h4></Link>
                <Link to={"/contact"}><h4>CONTACT</h4></Link>
            </nav>
        );
    }
}

export default Nav;
  