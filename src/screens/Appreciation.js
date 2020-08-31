import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import '../assets/css/app.css'
import LoadingOverlay from 'react-loading-overlay'


class Appreciation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false
		}
	}

	componentDidMount() {
		console.log(this.props.location.state.location)
	}

	next = () => {
		this.setState({ loading: true })
		this.props.history.push('/ff-survey/Select', { location: this.props.location.state.location})
	}
	render() {
		return (
			<LoadingOverlay
				active={this.state.loading}
				spinner
			>
			<div className='main'>
				<h2> Thank you</h2>
				<p>Thank you for your help</p>
				<p>It is highly appreciated</p>
					{/* eslint-disable-next-line */}
				<a onClick={this.next}><p className="link">Please click here if you would like to add another station.</p></a>

				</div>
			</LoadingOverlay>
		)
	}
}

export default Appreciation;