import React from 'react';
import json from '../data/data.json';


const Contact = () => {
    return(
        <div className="contact">
            This is how you can reach me.
            {json.data.footer}
        </div>
    );
}

export default Contact;