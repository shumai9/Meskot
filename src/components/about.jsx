import React from 'react';
import massawa from './massawa.jpg';

const About = () => {
    return(
        <div className="about">
        <img className="masawino"src={massawa} alt="massawa" />
        <p>My name is Shumai,Born in this beautiful port town <strong>Massawa</strong>, in native laguage 'Mtsi'wa'ea</p>
        
        {/* <figure>
            <iframe src="https://www.youtube.com/embed/4Fqg43ozz7A"></iframe>
        </figure> */}
        </div>
    );
}

export default About;