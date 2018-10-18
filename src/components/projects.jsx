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
            <div className="projects">
                <menu>Projects List</menu>
                <ul>
                    <li>EDUCATION</li>
                </ul>
                <ol>
                    <li>PROJECTS</li>
                    <img src={'./public/assets/Berana.png'} alt="Berana" />
                </ol>
            </div>
        )
    }
    
}


export default Projects;