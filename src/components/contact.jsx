import React from 'react';


class Contact extends React.Component {
    render () {
        return(
            <div className="contact">
            <p>Email: {this.props.data.email}</p>
            <p>Tel:{this.props.data.tel}</p>
            <p>links: 
                <a href={`${this.props.data.links}`} target="_blank"> Shumai's Github</a> 
            </p>

            </div>
        );
    }
}

export default Contact;