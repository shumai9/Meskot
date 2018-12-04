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
        <h5>PROJECTS</h5>
        <img src="/assets/aws.png" alt="Berana" />
        <div className="img-container">
          <img src="/assets/Berana.png" alt="Berana" />
        </div>
      </div>
    )
  }
}


export default Projects;