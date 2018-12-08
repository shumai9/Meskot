import React from 'react';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            bucket: ''

        }
    }
 
    render (){
        return (
            <div className="home">
                {/* <p>{this.state.bucket}</p> */}
                <p>{this.props.data.intro}</p>
                <p>{this.props.data.body}</p>
                <p>{this.props.data.catch}</p>
                <p>{this.props.data.img}</p> 
            </div>
        );
    }
  
}



export default Home;