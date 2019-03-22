import React from 'react';
import '../style/contact.css';

class Contact extends React.Component {
  render() {
    const email = this.props.data.email;
    const tel = this.props.data.tel;
    const links = this.props.data.links;
    const url = this.props.data.img;
    const name = ['Github', 'LinkIn', 'Twitter'];

    return (
      <div id="main" className="contact">
        <h5> Contact details</h5>
        {email.map((text, i) => {
          return <p key={i}>E-mail: {text}</p>;
        })}
        {tel.map((text, j) => {
          return <p key={j}> Tel: {text}</p>;
        })}
        <h5>Profile links:</h5>
        {links.map((text, k) => {
          return (
            <div id="links" key={k}>
              <a href={`${text}`} target="_blank">
                <img className="icon" src={url[k]} alt={`${name[k]}`} />
              </a>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Contact;
