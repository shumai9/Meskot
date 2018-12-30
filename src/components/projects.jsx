import React from 'react';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      summary: this.props.data.summary,
      aim: this.props.data.aim,
      time: this.props.data.time,
      url: this.props.data.img
    };
  }
  render() {
    const title = this.props.data.title;

    return (
      <div id="main" className="projects menu">
        <h5>PROJECTS</h5>
        {title.map((text, i) => {
          return (
            <div key={i}>
              <h6>{text}</h6>
              <img id="proj" src={`${this.state.url[i]}`} alt={`${i}`} />
              <p>{this.state.aim[i]}</p>
              <p>{this.state.time[i]}</p>
              <p>{this.state.summary[i]}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Projects;
