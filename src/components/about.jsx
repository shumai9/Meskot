import React from 'react';
import { Link } from 'react-router-dom';

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
        {url.map((link, l) => {
          return <img className="masawino" src={link} key={l} alt={`${l}`} />;
        })}
        <h2>MY WHY?</h2>
        {body.map((text, j) => {
          return (
            <div key={j}>
              <p>{text}</p>
            </div>
          );
        })}
        <Link id="esp" to={'/contact'}>
          {' '}
          Let' s get in touch?
        </Link>
        {status.map((text, k) => {
          return <h5 key={k}>Currently : {text}</h5>;
        })}
      </div>
    );
  }
}

export default About;
