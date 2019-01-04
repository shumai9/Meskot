import React from 'react';
import '../style/projects.css';

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
        <div className="proj">
          {title.map((text, i) => {
            return (
              <div className="subpro" key={i}>
                <h6>{text}</h6>
                <img
                  className="masawino"
                  src={`${this.state.url[i]}`}
                  alt={`${text}`}
                />
                <div id="caption">
                  <p>Aim: {this.state.aim[i]}</p>
                  <p>Time taken: {this.state.time[i]}</p>
                  <p>Summary: {this.state.summary[i]}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Projects;
