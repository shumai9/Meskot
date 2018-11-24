import React from 'react';
import json from '../data/data.json';

import TextField from 'material-ui/TextField';

console.log('this is incoming', json.data.about);


const About = () => {
    return(
        <div className="about" onLoad={this.handleData}>         
            <img className="masawino"src="assets/massawa.jpg" alt="massawa" />
            <p>{json.data.about}</p>
            <br />
            <p>ask these questions to yourself </p>
            <ul>
                <li>What is the purpose of your personal website?</li>
                <li>Who are your target audience? Students, potential clients, shoppers, etc.</li>
                <li>What are the must-have info on the site? Portfolio, contact details, product specifications, etc.</li>
                <li>How do you present those info? Gallery styles, point forms, animations, etc</li>
            </ul>
            <form>
                <TextField
                floatingLabelText="name" />
                <TextField
                floatingLabelText="password"
                type="password" />
             <button>Login</button>
             </form>
            
            {/* <figure>
                <iframe src="https://www.youtube.com/embed/4Fqg43ozz7A"></iframe>
            </figure> */}          
        </div>
    );
}

export default About;