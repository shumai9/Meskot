import React from 'react';
import '../style/home.css';
import Carasole from './caro';

class Home extends React.Component {
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
    const idea = this.props.data.catch;
    const url = this.props.data.img;
    return (
      <div id="main" className="home">
        {title.map((text, i) => {
          return <h1 key={i}>{text}</h1>;
        })}
        <div className="text-container">
          {body.map((text, j) => {
            return (
              <p className="para" key={j}>
                {' '}
                {text}
              </p>
            );
          })}
        </div>
        <Carasole url={url} />
        <h4>A photo is more than a 1000 words</h4>
        <div className="img-container">
          {url.map((text, l) => {
            return <img className="masawino" src={text} key={l} alt={`${l}`} />;
          })}
        </div>
        {idea.map((text, k) => {
          return <p key={k}>{text}</p>;
        })}
      </div>
    );
  }
}

export default Home;
