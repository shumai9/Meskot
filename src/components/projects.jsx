import React from 'react';

class Projects extends React.Component {
  render() {
    const title = this.props.data.title;
    const aim = this.props.data.aim;
    const time = this.props.data.time;
    const summary = this.props.data.summary;
    const url = this.props.data.img;
    return (
      <div id="main" className="projects menu">
        <h5>PROJECTS</h5>
        {title.map((text, i) => {
          return (
            <div key={i}>
              <h3>{text}</h3>
            </div>
          );
        })}
        {aim.map((text, i) => {
          return (
            <div key={i}>
              <p>{text}</p>
            </div>
          );
        })}
        {time.map((text, i) => {
          return (
            <div key={i}>
              <p>{text}</p>
            </div>
          );
        })}
        {summary.map((text, i) => {
          return (
            <div key={i}>
              <p>{text}</p>
            </div>
          );
        })}
        <div className="img-container">
          {url.map((link, i) => {
            return (
              <div key={i}>
                <img id="proj" src={link} alt={`${i}`} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Projects;
