import React from 'react';

class About extends React.Component{
    constructor() {
        super();
        this.state = {
            loaded: false,
            bucket: ''

        }
    }
    render(){
    return(
        <div className="about">
        <h1> Hi, I'm Shumai</h1>
        <p>{this.props.data.intro}</p>         
            <img className="masawino"src="assets/massawa.jpg" alt="massawa" />
           <p>
            {this.props.data.body.bio} 
            {this.props.data.body.edu}
            </p>
           <p>{this.props.data.body.reason} </p>
                                     
        </div>
        );
    }
}


export default About;