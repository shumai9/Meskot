import React from 'react';

class Timeline extends React.Component {
  render() {
    return (
      <div id="main" className="timeline">
        <p> It all started</p>
        <li>{this.props.data.career}</li>
        <li>
          {this.props.data.date} : {this.props.data.place}
        </li>
      </div>
    );
  }
}

export default Timeline;
