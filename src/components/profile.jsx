import React, { Component } from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edu : {}
        }
    }
    render(){
        return(
            <div>
                <menu>Profile</menu>
                <ul>
                    <li>EDUCATION</li>
                    <li>PROJECTS</li>
                </ul>
            </div>
        )
    }
    
}


export default Profile;