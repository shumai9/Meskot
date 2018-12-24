import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <div id="main" className="contact">
        <div>
          <h5> Contact details</h5>
          <p>Email: {this.props.data.email}</p>
          <p>Tel:{this.props.data.tel}</p>
          <h5>Profile links:</h5>
          <p>
            <a href={`${this.props.data.links[0]}`} target="_blank">
              Github profile
            </a>
          </p>
          <p>
            <a href={`${this.props.data.links[1]}`} target="_blank">
              linkedin
            </a>
          </p>
          <h5> Follow me:</h5>
          <p>
            <a href={`${this.props.data.follow[0]}`} target="_blank">
              Twiter
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default Contact;
