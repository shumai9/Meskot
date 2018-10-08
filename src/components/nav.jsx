import React from 'react';
import { Link} from 'react-router-dom';
import logo from '../shuma.svg';
import './nav.css';

class Nav extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           stickyNav: false
        }
        this.handleScroll = this.handleScroll.bind(this);
        this.handleSticky = this.handleSticky.bind(this);
    }  
    
    handleScroll = function (){
        this.setState({ stickyNav: true });
    }

    handleSticky = function() {
        this.setState({ stickyNav: false });
    }
   
       

    
    render () {
        // document.addEventListener("scroll", ()=> {
        // window.scrollY > 50 ? this.handleScroll() : this.handleSticky();
        // });
    
        return(
            <div className={`nav ${this.state.stickyNav ? 'sticky' : ''} `}>
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
  