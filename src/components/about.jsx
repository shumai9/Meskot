import React from 'react';
import json from '../data/data.json';

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
        <h1>{json.about.intro} </h1>         
            <img className="masawino"src="assets/massawa.jpg" alt="massawa" />
           <p>
            {json.about.body.bio} 
            {json.about.body.edu}
            </p>
           <p>{json.about.body.reason} </p>
                                     
        </div>
        );
    }
}


export default About;