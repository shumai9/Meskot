import React from 'react';

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edu : {}
        }
    }
    render(){
        return(
            <div className="projects menu">
                <ul>
                    <li>EDUCATION</li>
                    <img src="/assets/aws.png" alt="Berana" />                      
                </ul>
                <ol>
                    <li>PROJECTS</li>
                    <div className="img-container">
                        <img src="/assets/Berana.png" alt="Berana" />
                    </div>
                </ol>
                <iframe title="post" src="https://drive.google.com/file/d/1CrZT2Ajw7WPRCKXqb6xVXiU1tf2rMFiU2A/preview" width="640" height="480">
        </iframe>
        <iframe title="poster" src="https://drive.google.com/file/d/1gMgZ1LOM1q4NYHKCtOXpAQC0y41dEBIF-w/preview" width="640" height="480"></iframe>           
            </div>
        )
    }
    
}


export default Projects;