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
        <h1>Hi, I'm Shumai</h1>
        <h2>{this.props.data.intro}</h2>
        <img className="masawino" src="assets/massawa.jpg" alt="massawa" />
        <div>
          <p>
            {this.props.data.body.bio}
            {this.props.data.body.edu}
          </p>
        </div>
        <div>
          <p>{this.props.data.body.reason} </p>
        </div>
      </div>
    );
  }
}

export default About;
