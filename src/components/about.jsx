import React from 'react';

class About extends React.Component{
    constructor() {
        super();
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
                bucket: data.slice()
            });
            console.log(this.state.bucket);            
        })
        .catch(e => {
            console.log('problem ->', e)
        })
    }
    render(){
    
    return(
        <div className="about">         
            <img className="masawino"src="assets/massawa.jpg" alt="massawa" />
            <h1>ask these questions to yourself </h1>
            <ul>
                <li>What is the purpose of your personal website?</li>
                <li>Who are your target audience? Students, potential clients, shoppers, etc.</li>
                <li>What are the must-have info on the site? Portfolio, contact details, product specifications, etc.</li>
                <li>How do you present those info? Gallery styles, point forms, animations, etc</li>
            </ul>
           <p>{ this.state.bucket } </p>
           <aside>
               
            </aside>                              
        </div>
        );
    }
}


export default About;