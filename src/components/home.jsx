import React from 'react';
import GoogleLogin from 'react-google-login';
import {PostData} from '../service/post_service';
import {Redirect} from 'react-router-dom';
import { GoogleLogout } from 'react-google-login';


class Home extends React.Component {
    constructor(props) {
        super(props);
           this.state = {
           login: false,
           redirect: false
        };
    
    }

    login = (response) => {
        sessionStorage.setItem("userData", JSON.stringify(response));
        if(!response.error){
                this.setState({
                login: true,
            });
        }
    }

    logout = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // navigate to the home route//
       this.setState({
           login: false,
        })       
    }
    
    
    render() {
        const responseGoogle = (response) => {
            console.log("google console");
            console.log(response);
            this.login(response);
        }
       
    // if (this.state.redirect || sessionStorage.getItem('userData')) {
    //     return (<Redirect to={'/home'}/>)
    // }
    
    return (
        this.state.login ?
        <div className="home">
            <GoogleLogout buttonText="Logout" onLogoutSuccess={this.logout} >
            </GoogleLogout>            
        </div> :
            <div className="home">
                <h2 id="welcomeText">Home Shumai</h2>
                <GoogleLogin
                clientId="677884442844-86pue30nf4s71f61h8tbguo1uirsia5r.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}/>

            </div>
       
        );
    }
}



export default Home;