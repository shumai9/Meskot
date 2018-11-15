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
                <h3>Projects List</h3>
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
            </div>
        )
    }
    
}


export default Projects;