import React from 'react';
import Nav from './nav.jsx';
import './option.css';

class Option extends React.Component {
  constructor(props) {
    super(props);
    this.openList = this.openList.bind(this);
    this.closeList = this.closeList.bind(this);
  }
  openList() {
    this.props.handleOpen();
  }
  closeList() {
    this.props.handleClose();
  }

  render() {
    const open = this.props.open;
    return open ? (
      <div className="option open">
        <div onClick={this.closeList}>
          <img id="heart" src="/assets/option-close.svg " alt="" />
        </div>
        {open ? <Nav /> : null}
      </div>
    ) : (
      <div className="option close">
        <img
          id="x-arrow"
          src="/assets/option-open.svg"
          alt=""
          onClick={this.openList}
        />
      </div>
    );
  }
}

export default Option;
