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
        const bar = document.querySelector('.nav');
        
        this.setState({ 
            top: bar.offsetTop, height: bar.offsetHeight
        });
        
        window.addEventListener('scroll', this.handleScroll );
       
    }
    
    componentDidUpdate() {
        this.state.scroll > this.state.top ? document.body.style.paddingTop = `${this.state.height}px` : document.body.style.paddingTop = 0;
    }
       
    render () {  
        return(
            <div className={`nav ${ this.state.scroll > this.state.top ? "sticky" : "" }`}>
            <img src={logo} className="App-logo" alt="logo" />  
                 <ul>
                <li><Link to={"/"}><h4>HOME</h4></Link></li>
                <li><Link to={"/about"}><h4>ABOUT</h4></Link></li>
                <li><Link to={"/timeline"}><h4>TIMELINE</h4></Link></li>
                <li><Link to={"/profile"}><h4>PROFILE</h4></Link></li>
                <li><Link to={"/contact"}><h4>CONTACT</h4></Link></li>
              </ul>
            </div>
        );
    }
}

export default Nav;
  