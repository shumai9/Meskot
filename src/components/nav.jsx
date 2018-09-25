import React from 'react';
import { Link} from 'react-router-dom';
import './nav.css';

class Nav extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           stickyNav: false
        }
    }    
    render () {
        document.addEventListener('scroll',  () => {
            window.scrollY > 46 ? this.setState({ stickyNav: true }) : this.setState({ stickyNav: false });
        }
        );
        return(
            <div className={`nav ${this.state.stickyNav ? 'sticky' : ''} `}>
                 <ul>
                <li><Link to={"/"}>HOME</Link></li>
                <li><Link to={"/about"}>ABOUT</Link></li>
                <li><Link to={"/timeline"}>TIMELINE</Link></li>
                <li><Link to={"/profile"}>PROFILE</Link></li>
                <li><Link to={"/contact"}>CONTACT</Link></li>
              </ul>
            </div>
        );
    }
}

export default Nav;
  