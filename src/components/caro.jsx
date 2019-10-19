import React from 'react';
//reciving an arr of urls
class Carasole extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: this.props.url[0],
      currentIndex: 0
    };
  }

  displayImg = urlIndex => {
    this.setState({
      photo: this.props.url[urlIndex],
      currentIndex: this.props.url.findIndex(urlIndex)
    });
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
    }
  };
  render() {
    console.log('Nothing here', this.state.currentIndex, this.props.url.length);
    return (
      <div className="caro">
        <button onClick={this.slideLeft} className="left btn">
          Left
        </button>
        <img className="masawino" src={this.state.photo} alt={'caro'} />
        <button onClick={this.slideRight} className="right btn">
          Right
        </button>
      </div>
    );
  }
}

export default Carasole;
