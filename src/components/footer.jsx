import React from 'react';
import '../style/footer.css';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      end: 0,
      quotes: this.props.data.quotes,
      feeds: this.props.data.feeds
    };
  }
  componentDidMount() {
    this.setState({ start: performance.now() });
  }

  render() {
    console.warn('foot it', this.state.start);
    const copyright = this.props.data.rights;
    return (
      <div className="footer">
        <div>
          {this.state.quotes.map((text, j) => {
            return (
              <p className="para" key={j}>
                {text}
              </p>
            );
          })}
        </div>
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
      </div>
    );
  }
}

export default Footer;
