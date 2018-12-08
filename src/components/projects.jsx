import React from 'react';

class Projects extends React.Component {
  
  render(){
    return(
      <div className="projects menu">
      <p>{this.props.data.rights}</p>
      <p>{this.props.data.duration}</p>
      <p>{this.props.data.objective}</p>
      <p>{this.props.data.list} </p>
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