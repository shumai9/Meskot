import React from 'react';



class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logedin: false,
            lib: {}
        }
        this.login = () => {
            fetch('https://accounts.google.com/o/oauth2/auth', {
            method: "GET", 
            headers: { 'Content-Type': 'application/json; charset=UTF-8' },
            credentials: 'include'
        })
        }
    }
    

    // componentDidMount() {
    //     let data = {
    //         "pageSize":"100"
    //     }

    //     fetch('https://photoslibrary.googleapis.com/v1/mediaItems', {
    //         method: "GET", 
    //         body: JSON.stringify(data),
    //         headers: { 'Content-Type': 'application/json; charset=UTF-8', mode: 'cors' },
    //         credentials: 'include'
    //     })
    //     .then(res => res.json())
    //     .then((response) => {        
    //         if(response.mediaItems) {
    //             this.setState({
    //             logedIn: true,
    //             lib: response.mediaItems 
    //             });  
    //         } else {
    //             console.log(response) 
    //         }
    //     });
    // }
    
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