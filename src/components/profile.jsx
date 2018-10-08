import React from 'react';

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
                </ul>
                <ol>
                    <li>PROJECTS</li>
                    <img src={'../public/assets/Berana.png'} alt="Berana" />
                </ol>
            </div>
        )
    }
    
}


export default Profile;