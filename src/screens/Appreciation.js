import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import '../assets/css/app.css'
import LoadingOverlay from 'react-loading-overlay'

import Modal from 'react-modal';
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class Appreciation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			isOpen:false
		}
	}

	componentDidMount() {
		try{
			console.log(this.props.location.state.location)
		}catch(err){
			this.setState({ loading: true })
			this.props.history.push('/ff-survey/intro')

		}
	}

	next = () => {
		this.setState({ loading: true })
		this.props.history.push('/ff-survey/Select', { location: this.props.location.state.location})
	}

	done=()=>{
		this.setState({isOpen:true})
	}

	render() {
		return (
			

			<LoadingOverlay
				active={this.state.loading}
				spinner
			>
				<Modal
					isOpen={this.state.isOpen}
					style={customStyles}
					contentLabel="Example Modal"
					onRequestClose={()=>{this.setState({isOpen:false})}}
				>
					<h1>Thank you for helping out <span role='img' aria-label='smiley face'>🙂</span></h1>
				</Modal>

			<div className='main'>
				<h2> Thank you</h2>
				<p>Thank you for your help</p>
				<p>It is highly appreciated</p>
					{/* eslint-disable-next-line */}
				<a onClick={this.next}><p className="link">Please click here if you would like to add another station.</p></a>
					{/* eslint-disable-next-line */}
				<a onClick={this.done}> <p className="link"> Click here to exit</p></a>

				</div>
			</LoadingOverlay>
		)
	}
}

export default Appreciation;