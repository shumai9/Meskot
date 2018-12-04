import React from 'react';
import json from '../data/data.json';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            bucket: ''

        }
    }
 
    render (){
        return (
            <div className="home">
                {/* <p>{this.state.bucket}</p> */}
                <p>{json.home.intro}</p>
                <p>{json.home.body}</p>
                <p>{json.home.catch}</p>
                <p>{json.home.img}</p> 
            </div>
        );
    }
  
}



export default Home;