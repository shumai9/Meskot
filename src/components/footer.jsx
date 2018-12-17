import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <em>For more details </em>
        <p>{this.props.data.rights}</p>
        <div>
          <p>Shumai O.A </p>
          <time datetime="2018-12-9">
            December 9<sup>th</sup>, 2018
          </time>
          <i>&copy</i>
        </div>
      </div>
    );
  }
}

export default Footer;
