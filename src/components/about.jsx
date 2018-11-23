import React from 'react';
import json from '../data/data.json';

console.log('this is incoming', json.data.about);



const About = () => {
    return(
        <div className="about" onLoad={this.handleData}>         
            <img className="masawino"src="assets/massawa.jpg" alt="massawa" />
            <p>{json.data.about}</p>
            
            {/* <figure>
                <iframe src="https://www.youtube.com/embed/4Fqg43ozz7A"></iframe>
            </figure> */}          
        </div>
    );
}

export default About;