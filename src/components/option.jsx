import React from 'react';
import Nav from './nav.jsx';
import Open from './option-open.svg';
import Close from './option-close.svg';
import './option.css';


class Option extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        };
    }

    handleOpen = () => {
        this.setState({ open: true });
    }
    
    handleClose = () => { 
            this.setState({ open: false });
    }
  

    render(){
        //the switch have to be inverted to offer user buton to open or close
        return(
            this.state.open ? 
            <div className="option close" >
                <div onClick={this.handleClose}>
                    <img id="x-arrow" src={Close} alt="open-icon"/>
                </div>
                <Nav />
            </div>            
            :
            <div className="option open" onClick={this.handleOpen}>
                <img id="heart" src={Open} alt="open-icon" />
            </div>
            
        );
    }
}


export default Option;