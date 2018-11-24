import React from 'react';
import json from '../data/data.json';

const Footer = ()=> {
  return (
    <div className="footer">For more details 
    <p>{json.data.footer}</p>
    </div>
  )
};

export default Footer;