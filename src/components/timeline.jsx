import React from 'react';
import '../style/timeline.css';

class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      places: this.props.data.places,
      time: this.props.data.date,
      date: this.props.data.date,
      url: this.props.data.img
    };
  }
  render() {
    const job = this.props.data.career;
    const place = this.props.data.places;

    return (
      <div id="main" className="timeline">
        <div className="img-container">
          {place.map((title, k) => {
            return (
              <div key={k}>
                <h1>{job[k]}</h1>
                <img
                  className="masawino"
                  src={`${this.state.url[k]}`}
                  alt={`${title}`}
                />
                <p>
                  {this.state.places[k]} : {this.state.time[k]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Timeline;
