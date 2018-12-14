import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      bucket: ''
    };
  }
  render() {
    return (
      <div className="about">
        <h1>{this.props.data.intro}</h1>
        <h2>WHY do What I do..?</h2>
        <img className="masawino" src="assets/massawa.jpg" alt="massawa" />
        <div>
          <p>{this.props.data.body.bio}</p>
          <p>{this.props.data.body.edu}</p>
        </div>
        <div>
          <p>{this.props.data.body.reason} </p>
        </div>
      </div>
    );
  }
}

export default About;
