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
 
    componentDidMount() {
        fetch("./shumay.txt")
        .then((reponse) => reponse.text())
        .then((data) => {
            this.setState({
                loaded: true,
                bucket: data.split('. ')
            })
                       
        })
        .catch(e => {
            console.log('problem ->', e)
        })
    }
    render (){
        console.log(this.state.bucket);
        return (
            <div className="home">
                <p>{this.state.bucket}</p>   
            </div>
        );
    }
  
}



export default Home;