import React from 'react';
import '../style/footer.css';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: this.props.data.footer.quotes,
      feeds: this.props.data.footer.feeds
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
    const copyright = this.props.data.footer.rights;
    const links = this.props.data.contact.links;
    const url = this.props.data.contact.img;
    const name = ['Github', 'LinkIn', 'Twitter'];
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
        {links.map((text, k) => {
          return (
            <span key={k}>
              <a href={`${text}`} target="_blank">
                <img className="icon" src={url[k]} alt={`${name[k]}`} />
              </a>
            </span>
          );
        })}
      </div>
    );
  }
}

export default Footer;
