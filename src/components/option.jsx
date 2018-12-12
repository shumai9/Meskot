import React from 'react';
import Nav from './nav.jsx';
import './option.css';

class Option extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleOpen = () => {
      this.setState({ open: true });
    };
    this.handleClose = () => {
      this.setState({ open: false });
    };
  }

  render() {
    return this.state.open ? (
      <div className="option open">
        <div onClick={this.handleClose}>
          <img id="heart" src="/assets/option-close.svg " alt="open-icon" />
        </div>
        {this.state.open ? <Nav /> : null}
      </div>
    ) : (
      <div className="option close" onClick={this.handleOpen}>
        <img id="x-arrow" src="/assets/option-open.svg" alt="open-icon" />
      </div>
    );
  }
}

export default Option;
