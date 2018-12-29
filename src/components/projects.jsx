import React from 'react';

class Projects extends React.Component {
  render() {
    return (
      <div id="main" className="projects menu">
        <h5>PROJECTS</h5>
        <div className="img-container">
          <p>{this.props.data.duration}</p>
          <ul>
            <li>{this.props.data.list[0]}</li>
            <li>{this.props.data.list[1]}</li>
            <li>{this.props.data.list[2]}</li>
          </ul>
          <img src="/assets/aws.jpg" alt="Berana" />
          <img src="/assets/Berana.jpg" alt="Berana" />
        </div>
      </div>
    );
  }
}

export default Projects;
