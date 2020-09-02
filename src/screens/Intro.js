import React, { Component } from 'react';
import '../assets/css/app.css'
import LoadingOverlay from 'react-loading-overlay'

class Intro extends Component{
	constructor(props) {
		super(props);
		this.state = {
			stations: [],
			loading:false
		}
	}

	next = () => {
		this.setState({ loading: true })
		this.props.history.push('/ff-survey/Select', { stations: this.state.stations });
	}

	componentDidMount() {
		// this.locate();
		// this.get();
	}

	get = async () => {
		try {
			
			let res = await (await fetch('http://192.168.43.94:8000/api/pioneer/6.601838-3.351486',
				{
					headers: {
						'Accept': 'application/json, text/plain, */*',
						'Content-Type': 'application/json'
					}
				}
			)).json();
			this.setState({ stations: res })
		} catch (err) {
			// todo: 
			alert(err)
			console.log(err)
		}
	}

	locate = async () => {
		// alert(navigator.geolocation)c

		// alert('alert');
		if (navigator.geolocation) {
			await navigator.geolocation.getCurrentPosition((pos, err) => {
				if (err) {
					// alert(err)
				} else {
					alert(JSON.stringify(pos));					
				}
			});
		} else {
			alert('Please use a different browser or try a different browser');
		}
	}
	
	render() {
		return (

			<LoadingOverlay
				active={this.state.loading}
				spinner
			>
			<div className="App" style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center'}}>
				<div className='main'>
					<div style={{width:'100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between',/*  background:'var(--Color3)', padding:'50' */}}>
						<h1 className='' /* style={{ color:'white' } }*/>Welcome</h1>
						{/* <image/> */}
					</div>
					<div style={{ height: '1px', background:'var(--Color3)'}}/>
					<h3>Hello,</h3>
					<p>Thanks so much for agreeing to help out with this survey</p>
					{/* <p>This would help ensure the prices of fuel are as
						 low as possible especially during these complex periods</p> */}
					<p>This would also help ensure fellow Nigerians know <b>where</b> to look to get the best quality fuel at the lowest prices</p>
					<p>Thanks once again, please Click "Next" to continue</p>
					<button onClick={this.next}>Next</button>
				</div>
			</div>
			</LoadingOverlay >
		)
	}
}

export default Intro;