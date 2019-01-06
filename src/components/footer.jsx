import React from 'react';
import '../style/footer.css';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: this.props.data.quotes,
      feeds: this.props.data.feeds
    };
    this.randomQuoter = this.randomQuoter.bind(this);
  }

  randomQuoter = () => {
    let maxNum = this.state.quotes.length;
    let randNum = function() {
      return Math.floor(Math.random() * Math.floor(maxNum));
    };
    return this.state.quotes[randNum()];
  };

  render() {
    const copyright = this.props.data.rights;
    return (
      <div className="footer">
        <div>
          {this.state.feeds.map((text, j) => {
            return (
              <p className="para" key={j}>
                {text}
              </p>
            );
          })}
        </div>

        <p>{copyright}</p>
        <h6 className="quote">' {this.randomQuoter()} '</h6>
      </div>
    );
  }
}

export default Footer;
