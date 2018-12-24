import React from 'react';
import Nav from './nav.jsx';
import './option.css';

class Option extends React.Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu(e) {
    e.stopPropagation();
    this.props.toggleOptionsMenu();
  }

  render() {
    const open = this.props.open;
    return open ? (
      <div className="option open" onClick={this.toggleMenu}>
        <div id="net">
          <img id="heart" src="/assets/option-close.svg " alt="" />
        </div>
        {open ? <Nav /> : null}
      </div>
    ) : (
      <div className="option close" onClick={this.toggleMenu}>
        <img id="x-arrow" src="/assets/option-open.svg" alt="" />
      </div>
    );
  }
}

export default Option;
