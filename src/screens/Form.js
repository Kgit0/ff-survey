import React, { Component } from 'react';
import '../assets/css/app.css'
import TimeField from 'react-simple-timefield';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



class Form extends Component {
	constructor(props) {
		super(props);

		// this.onChange = this.onChange.bind(this);
		try {
			this.state = {
				name: this.props.location.state.station.name,
				address: this.props.location.state.station.address,
				Opening_time: this.props.location.state.station.openingTime || '00:01',
				Closing_time: this.props.location.state.station.closingTime || '00:00',
				Fuel_price: this.props.location.state.station.petrol.price || '',
				pumps_T: this.props.location.state.station.petrol.pumpsTotal || '',
				DaysOpen: {
					Sunday: this.props.location.state.station.days_open.Sunday || false,
					Monday: this.props.location.state.station.days_open.Monday || false,
					Tuesday: this.props.location.state.station.days_open.Tuesday || false,
					Wednesday: this.props.location.state.station.days_open.Wednesday || false,
					Thursday: this.props.location.state.station.days_open.Thursday || false,
					Friday: this.props.location.state.station.days_open.Friday || false,
					Saturday: this.props.location.state.station.days_open.Saturday || false,
				},
				errs: {
					name: false,
					address: false,
					Opening_time: false,
					Closing_time: false,
					Fuel_price: false,
					pumps_T: false,
					DaysOpen: false

				},
				submitable: false
			}
		} catch (err) {
			this.props.history.push('Select')
		}

	}
             
	componentDidMount() {
		let s = this.props.location.state.station
		console.log(s)
		try {
			this.setState({
				name: s.name,
				address: s.address,
				Opening_time: s.openingTime || '00.00',
				Closing_time: s.closingTime || '00.00',
			})
		} catch (err) {
			alert(err)
		}
		
		// this.render()
	}
	onChange = (ev,value) => {
		let type = ev.target.type;
		let name = ev.target.name;
		let val = ev.target.value

		let errs = this.state.errs;
		if (type === 'checkbox') {
			let dO = this.state.DaysOpen;
			dO[name] = ev.target.checked;
			if (Object.values(dO).includes(true)) { errs['DaysOpen'] = false } else { errs['DaysOpen'] = true}
			this.setState({
				DaysOpen: dO,
				errs: errs
			});
		}
		if (type === 'text' || type === 'number') {
			// let submitable = true
			if (val === ''||val<1) { 
				errs[name] = true;
				// submitable=false
			} else {
				errs[name] = false
				// submitable = true
			}
			this.setState({
				[name]: val,
				errs: errs,
			})
		}
		if (type === 'timefield') {
			alert('jhg')
		// 	this.setState({ [type]: val })
		}
		// alert(this.state.Opening_time)
	}

	submit = async () => {
		this.validate()
		try {
			let err = Object.values(this.state.errs);
			if (err.includes(true)) {
				// alert('true')
				return
			} else {
				// alert('false')
				let name = this.state.name;
				let address = this.state.address;
				let opening = this.state.Opening_time;
				let closing = this.state.Closing_time;
				let pumps = this.state.pumps_T;
				let price = this.state.Fuel_price;
				let days_open = this.state.DaysOpen;
				let payload = JSON.stringify({
					name: name,
					address: address,
					opening: opening,
					closing: closing,
					petrol: {
						price: price,
						pumps: pumps
					},
					days_open: days_open
				})
				let res = await (await fetch(`http://localhost:8000/api/pioneer/${this.props.location.state.station.id}/`, {
					method: 'put',
					headers: {
						'Accept': 'application/json, text/plain, */*',
						'Content-Type': 'application/json'
					},
					body: payload
				}
				)).json()
				if (res === 'success') {
					this.props.history.push('Appreciation', {location:this.props.location.state.station.pos});
				} else {
					toast.error('an error occurred', {
						position: "bottom-center",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
					});
				}
				// alert(res.status)
			}
		} catch (err) {
			// alert(err)
			toast.error('an error occurred', {
				position: "bottom-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			console.log(err)
			
		}
	}

	validate = () => {
		let name = this.state.name;
		let address = this.state.address;
		let pumps = this.state.pumps_T;
		let price = this.state.Fuel_price;
		let days_open = (Object.values(this.state.DaysOpen).includes(true))
		let errs = this.state.errs;

		if (name == '') { errs['name'] = true; }
		if (address == '') { errs['address'] = true; }
		if (pumps == '') { errs['pumps_T'] = true; }
		if (price == '') { errs['Fuel_price'] = true; }
		if (!days_open) { errs['DaysOpen'] = true }
		
		this.setState({ errs: errs });
		
		// alert(days_open)

		// alert(JSON.stringify(errs))56

	}

	render() {
		return (
			<form className='main' onSubmit={(e) => { e.preventDefault(); return (false) }}>
				{/* <p>{JSON.stringify(this.state)}</p> */}

				<h1>Station Details</h1>
				<hr/>
				<h3>Please help us fill this form</h3>
				<br />
				<br />
				<label>Name</label>
				<input
					name='name'
					type='text'
					defaultValue={this.state.name}
					onChange={this.onChange}
					className={this.state.errs.name?'err':''}
				/>
				<p className={!this.state.errs.name ? 'noErr' : 'err'}>Please enter the name of the station</p>
				<br />

				<label>Address</label>
				<input
					name='address'
					type='text'
					defaultValue={this.state.address}
					onChange={this.onChange}
					className={this.state.errs.address ? 'err' : ''}

				/>
				<p className={!this.state.errs.address ? 'noErr' : 'err'}>Please the address of the station</p>
				<br />

				<label>Fuel Price</label>
				<input
					name='Fuel_price'
					type='number'
					min='0'
					defaultValue={this.state.Fuel_price}
					onChange={this.onChange}
				/>
				<p className={!this.state.errs.Fuel_price ? 'noErr' : 'err'}>Please enter the number of pumps in the station</p>
				<br />

				<label>Opening time</label>
				<TimeField
					name='Opening_time'
					type='timefield'
					value={this.state.Opening_time}
					input={<input />}
					onChange={this.onChange}
					colon=":"
					showSeconds={false}
				/>
				<br />

				<label>Closing time</label>
				<TimeField
					name='Closing_time'
					type='timefield'
					value={this.state.Closing_time}
					input={<input />}
					onChange={this.onChange}
					colon=":"
					showSeconds={false}
				/>
				<br />

				<label>Number of pumps</label>
				<input
					name='pumps_T'
					type='number'
					min='0'
					defaultValue={this.state.pumps_T}
					onChange={this.onChange}
				/>
				<p className={!this.state.errs.pumps_T ? 'noErr' : 'err'}>Please enter the number of pumps in the station</p>
				<br />
				<label>Days Open</label>
				<p className={!this.state.errs.DaysOpen ? 'noErr' : 'err'}>Please select open days</p>
				<div className='F row j-start'>
					<input
						type='checkbox'
						name='Sunday'
						defaultChecked={this.state.DaysOpen.Sunday}
						onChange={this.onChange}
					/>
					<label>Sunday</label>
				</div>
				<div className='F row j-start'>
					<input
						type='checkbox'
						name='Monday'
						defaultChecked={this.state.DaysOpen.Monday}
						onChange={this.onChange}
					/>
					<label>Monday</label>
				</div>
				<div className='F row j-start'>
					<input
						type='checkbox'
						name='Tuesday'
						defaultChecked={this.state.DaysOpen.Tuesday}
						onChange={this.onChange}
					/>
					<label>Tuesday</label>
				</div>
				<div className='F row j-start'>
					<input
						type='checkbox'
						name='Wednesday'
						defaultChecked={this.state.DaysOpen.Wednesday}
						onChange={this.onChange}
					/>
					<label>Wednesday</label>
				</div>
				<div className='F row j-start'>
					<input
						type='checkbox'
						name='Thursday'
						defaultChecked={this.state.DaysOpen.Thursday}
						onChange={this.onChange}
					/>
					<label>Thursday</label>
				</div>
				<div className='F row j-start'>
					<input
						type='checkbox'
						name='Friday'
						defaultChecked={this.state.DaysOpen.Friday}
						onChange={this.onChange}
					/>
					<label>Friday</label>
				</div>
				<div className='F row j-start'>
					<input
						type='checkbox'
						name='Saturday'
						defaultChecked={this.state.DaysOpen.Saturday}
						onChange={this.onChange}
					/>
					<label>Saturday</label>
				</div>
				<button /* disabled={this.state.submitable?false:true} */ onClick={this.submit}>Submit</button>
				<ToastContainer
					position="bottom-center"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
			</form>

		)
	}
}

export default Form;