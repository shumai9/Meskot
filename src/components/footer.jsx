import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <p>{this.props.data.quotes}</p>
        <p>{this.props.data.feeds[0]}</p>
        <p>{this.props.data.feeds[1]}</p>
        <p>{this.props.data.rights}</p>
      </div>
    );
  }
}

export default Footer;
