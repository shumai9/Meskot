import React from 'react';
import { Link } from 'react-router-dom';
import '../style/about.css';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      bucket: ''
    };
  }
  render() {
    const title = this.props.data.intro;
    const body = this.props.data.body;
    const status = this.props.data.status;
    const url = this.props.data.img;
    const headingStyle = {
      background: 'no-repeat 100% 50% url(' + url[1] + ')',
      backgroundsize: 'cover',
      height: '20vh',
      width: '100%'
    };

    return (
      <div id="main" className="about">
        <div>
          {title.map((text, i) => {
            return (
              <h1 style={headingStyle} key={i}>
                {text}
              </h1>
            );
          })}
          <div className="text-container">
            {body.map((text, j) => {
              return (
                <p className={`para ${j}`} key={j}>
                  {text}
                </p>
              );
            })}
          </div>
        </div>
        <Link id="esp" to={'/contact'}>
          {' '}
          Let' s get in touch
        </Link>
        <p>Here's a few things I'm experienced with:</p>
        <ul className="skills">
          {status.map((text, k) => {
            return (
              <li className="lang" key={k}>
                {text}
              </li>
            );
          })}
        </ul>
        <img className="masawino" src={url[0]} alt="massawa" />
      </div>
    );
  }
}

export default About;
