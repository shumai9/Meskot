import React from 'react';
import json from '../data/data.json';

const Footer = ()=> {
  return (
    <div className="footer">For more details 
    <p>{json.footer.rights}</p>
    </div>
  )
};

export default Footer;