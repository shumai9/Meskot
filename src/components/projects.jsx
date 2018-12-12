import React from 'react';

class Projects extends React.Component {
  render() {
    return (
      <div className="projects menu">
        <h5>PROJECTS</h5>
        <div className="img-container">
          <p>{this.props.data.rights}</p>
          <p>{this.props.data.duration}</p>
          <p>{this.props.data.objective}</p>
          <p>{this.props.data.list} </p>
          <img src="/assets/aws.png" alt="Berana" />
          <img src="/assets/Berana.png" alt="Berana" />
        </div>
      </div>
    );
  }
}

export default Projects;
