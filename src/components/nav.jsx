import React from 'react';
import { Link} from 'react-router-dom';
import './nav.css';

class Nav extends React.Component {
	constructor(props){
		super(props);
		this.state = {};
	}  

	handler = () => {
		var content = document.querySelector('.main');       
		content.scrollIntoView({behavior: "smooth"});
	}

	handleScroll = () => {
		this.setState({ scroll: window.scrollY});
	}

	componentDidMount(){
		const bar = document.querySelector('nav');

		this.setState({ 
			top: bar.offsetTop, height: bar.offsetHeight
		});

		window.addEventListener('scroll', this.handleScroll );
	}

	componentDidUpdate() {
		this.state.scroll > this.state.top ? document.body.style.Top = 
		`${this.state.height}px` : document.body.style.Top = 0;
	}
	componentWillUnmount () {
		console.log('Nav unmounted');
		window.removeEventListener('scroll', this.handleScroll );
	} 
	
	render () {  
		return(
			<nav className={`nav-bar ${ this.state.scroll > this.state.top ? "sticky" : "" }`} >              
				<div className="list" onClick={this.handler}>
					<Link to={"/"}><img src="/assets/shuma.svg" className="App-logo" alt="logo" /></Link>
					<Link to={"/"}>HOME</Link>
					<Link to={"/about"}>ABOUT</Link>
					<Link to={"/timeline"}>TIMELINE</Link>
					<Link to={"/projects"}>PROJECTS</Link>
					<Link to={"/contact"}>CONTACT</Link>
				</div >
			</nav>
		);
	}
}

export default Nav;
