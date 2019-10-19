import React from 'react';

class Carasole extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: this.props.url[0],
      currentIndex: 0
    };
  }
  displayImg = () => {
    this.slideRight();
  };
  slideLeft = n => {
    if (this.state.currentIndex > 0) {
      this.setState({
        photo: this.props.url[this.state.currentIndex - 1],
        currentIndex: this.state.currentIndex - 1
      });
    }
  };
  slideRight = n => {
    const totalPhotos = this.props.url.length - 1;
    if (this.state.currentIndex < totalPhotos) {
      this.setState({
        currentIndex: this.state.currentIndex + 1,
        photo: this.props.url[this.state.currentIndex + 1]
      });
    } else {
      this.setState({
        currentIndex: 0
      });
    }
  };
  componentDidMount() {
    window.setInterval(this.displayImg, 3000);
  }
  render() {
    return (
      <div className="caro fade">
        <a onClick={this.slideLeft} className="left arrow">
          &#10094;
        </a>
        <a onClick={this.slideRight} className="right arrow">
          &#10095;
        </a>
        <img className="masawino" src={this.state.photo} alt={'caro'} />
      </div>
    );
  }
}
export default Carasole;
