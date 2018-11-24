import React from 'react';
import json from '../data/data.json';

console.log('this is incoming', json.data.about);


const About = () => {
    return(
        <div className="about">         
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
        </div>
    );
}

export default About;