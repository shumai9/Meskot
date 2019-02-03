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
      <div className="option open" onClick={this.onMenuToggle}>
        <div id="net">
          <img className="icon opened" src="/assets/option-close.svg " alt="" />
        </div>
        {this.props.menuIsOpen ? <Nav /> : null}
      </div>
    ) : (
      <div className="option close" onClick={this.onMenuToggle}>
        <img className="icon closed" src="/assets/option-open.svg" alt="" />
      </div>
    );
  }
}

export default Option;
