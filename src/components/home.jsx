import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      bucket: ''
    };
  }

  render() {
    return (
      <div className="home">
        {/* <p>{this.state.bucket}</p> */}
        <p>{this.props.data.intro}</p>
        <p>{this.props.data.body}</p>
        <p>{this.props.data.catch}</p>
        <img src={this.props.data.img} alt="flora" />
      </div>
    );
  }
}

export default Home;
