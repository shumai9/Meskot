import React from 'react';



class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logedin: false,
            lib: {}
        }
        this.login = () => {
            return (
                'https:'//accounts.google.com/o/oauth2/auth'
            )
        }
    }
    
    
    render() {
        return(
            <div className="home"> This is home 
                <p >More content coming soon ...</p>
                <button onClick= {this.login}>
                    Login via Google
                </button>
            </div>
        );
    }
}



export default Home;