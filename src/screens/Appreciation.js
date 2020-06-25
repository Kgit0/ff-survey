import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/app.css'

class Appreciation extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		console.log(this.props.location.state.location)
	}

	next=()=> {
		this.props.history.push('Select', { location: this.props.location.state.location})
	}
	render() {
		return (
			<div className='main'>
				<h2> Thank you</h2>
				<p>Thank you for your help</p>
				<p>It is highly appreciated</p>
				<a onClick={this.next}><p className="link">Please click here if you would like to add another station.</p></a>

			</div>
		)
	}
}

export default Appreciation;