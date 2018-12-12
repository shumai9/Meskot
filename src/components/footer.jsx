import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <em>For more details </em>
        <p>{this.props.data.rights}</p>
      </div>
    );
  }
}

export default Footer;
