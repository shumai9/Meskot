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

    return (
      <div id="main" className="about">
        {title.map((text, i) => {
          return <h1 key={i}>{text}</h1>;
        })}
        <div className="img-container">
          {url.map((link, l) => {
            return <img className="masawino" src={link} key={l} alt={`${l}`} />;
          })}
        </div>
        <h2>MY WHY?</h2>
        <div className="text-container">
          {body.map((text, j) => {
            return (
              <p className="para" key={j}>
                {text}
              </p>
            );
          })}
        </div>
        <Link id="esp" to={'/contact'}>
          {' '}
          Let' s get in touch?
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
      </div>
    );
  }
}

export default About;
