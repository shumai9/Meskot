import React from 'react';
import Nav from './nav.jsx';
import '../style/option.css';

class Option extends React.Component {
  constructor(props) {
    super(props);
    this.onMenuToggle = () => {
      this.props.onMenuToggle();
    };
  }
  render() {
    return this.props.menuIsOpen ? (
      <div className="option openlist" onClick={this.onMenuToggle}>
        <div id="net">
          {/* this div with id net is to catch click event so user 
          can close menu by clicking anywhere on the screen */}
          <img className="icon close" src="/assets/cross-icon.svg " alt="" />
        </div>
        <Nav />
      </div>
    ) : (
      <div className="option closedmenu" onClick={this.onMenuToggle}>
        <img className="icon menu" src="/assets/ship-icon.svg" alt="" />
        {null}
      </div>
    );
  }
}

export default Option;
