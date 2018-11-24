import React from 'react';
import json from '../data/data.json';

class Home extends React.Component {
    render (){
    return (
        <div className="home">
        {json.data.home}
        </div>
        );
    }
}



export default Home;