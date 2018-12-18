import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <em>For more details </em>
        <p>{this.props.data.feeds[0]}</p>
        <i>{this.props.data.feeds[1]}</i>
        <p>{this.props.data.quotes}</p>
        <p>{this.props.data.rights}</p>
      </div>
    );
  }
}

export default Footer;
