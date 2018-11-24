import React from 'react';
import json from '../data/data.json';


const Timeline = () => {
    return (
        <div className="timeline">
             <p> It all started</p>
          <li>{json.data.timeline}</li>
        </div>
    );
}

export default Timeline;