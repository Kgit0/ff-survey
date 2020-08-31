import React, { Component, createRef, Fragment } from 'react';
// import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
// import mapboxgl from 'mapbox-gl';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import '../assets/css/app.css';
import states from '../assets/json/states.json'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import config from '../config'
import LoadingOverlay from 'react-loading-overlay'
// import BounceLoader from 'react-spinners/BounceLoader'
// import stations from '../assets/json/stations.json' //debug



const Map = ReactMapboxGl({
	accessToken:
		'pk.eyJ1IjoibmFwcHMtbmJpIiwiYSI6ImNqcXpsNHI5ZDBlYmMzeG52NzJ6YWlxcXMifQ.z0APpgMYfKagA9LNS7McYQ'
});


let StationList = ({ stations, selected, selectFunc, reff }) => {
	// can use object or prop
	let st
	if (stations === undefined) {

	} else {
		st = stations.map((m, index) => {
			// alert(JSON.stringify(m))
			let i = index
			let s = m
			let isSelect = (selected.id === m.id);
			// alert('isSelect: ' + selected.id + ':' + m.id);

			let props = {
				// key={ m.id } isSelect?ref={ 'r'+m.id }: '' onClick = {(m)=> { select(s, i) }}
				key: m.id,
				onClick: (m) => { selectFunc(s, i) }
			}
			if (isSelect) { props.ref = reff }
			return (

				<li {...props} >
					<div style={{ display: 'flex', flexDirection: 'column', padding: '5px' }} className={isSelect ? 'selected' : ''}>
						<p style={{ fontSize: 20 }}>{m.name}</p>
						<p style={{ fontSize: 15, color: `${isSelect ? 'var(--bgColor1)' : 'var(--textColor2)'}`, alignSelf: 'flex-end' }}>{m.address}</p>
					</div>
					<hr />
				</li>
			)
		})
	}

	return (st);
}

class Station_Select extends Component {
	constructor(props) {
		super(props);
		this.state = {
			windowDimensions: {
				width: 0,
				height: 0
			},
			stations: '',
			stationSel: false,
			state: 'Lagos',
			address: '',
			potPlaces: [],
			showPotPlaces: false,
			location: {
				// "lat": 6.4613114, "long": 3.2003803
				lat: 6.5886591,
				long: 3.3471763
			},
			loading: false
			// position: [6.5950519, 3.3432809]
		}
		// let [station, setStation] = useState() //todo: more research
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

		this.active = createRef();
	}

	componentDidUpdate() {
		if (this.active.current) {
			this.active.current.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		}
	}

	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
		try {
			console.log('yay')
			console.log(typeof (this.props.location.state.location))
			if (typeof (this.props.location.state.location) !== 'undefined') {
				this.get(this.props.location.state.location)
				console.log('yay')
			} else {
				// this.get({ lat: 6.4597478, long: 3.1989956 })
				console.log('not undef')
				// alert("")
				toast.info('Please enter your area in the search bar', {
					position: "top-center",
					autoClose: 8000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			}
		} catch (err) {
			// this.get({ lat: 6.4597478, long: 3.1989956 })
			console.log(err)
		}

	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() {
		this.setState({
			windowDimensions: {
				width: window.innerWidth,
				height: window.innerHeight
			}
		});
	}

	next = () => {
		if (this.state.stationSel) {
			this.setState({ loading: true })
			this.props.history.push('/ff-survey/Form', { station: this.state.stationSel });
		} else {
			toast.info('Please select a station first', {
				position: "bottom-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}
	}

	select = (s) => {
		this.setState({
			stationSel: s,
			// location: {
			// 	lat: s.coord.lat,
			// 	long: s.coord.long,
			// },
			location: {
				lat: s.pos.lat,
				long: s.pos.long,
			}
		});
	}

	getLoc = async () => {
		try {
			let state = this.state.state
			let address = this.state.address

			let res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&limit=10&countrycodes=ng&q=${address},${state}`, {
				method: 'GET',
				headers: {
					'Accept': 'application/json, text/plain, */*',
					'Content-Type': 'application/json'
				},
			})
			let res2 = await res.json();
			let potPlaces = await res2.map((r) => {
				let { display_name: name, lat, lon } = r
				return (
					{
						name: name,
						pos: {
							lat: lat,
							long: lon
						}
					}
				)
			})

			this.setState({
				potPlaces: potPlaces,
				showPotPlaces: 'true'
			})
			toast.info('Please choose your area from the options', {
				position: "top-center",
				autoClose: 8000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			// alert(JSON.stringify(res2));
		} catch (err) {
			console.log(err)
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
	}

	getLocGmap = async () => {
		try {
			this.setState({ loading: true })
			let state = this.state.state
			let address = this.state.address

			let res = await fetch(`${config.base_url}/api/pioneer/address/${address},%20${state}`, {
				method: 'GET',
				headers: {
					'Accept': 'application/json, text/plain, */*',
					'Content-Type': 'application/json'
				},
			})
			let res2 = await res.json();
			if (res.status === 200) {
				this.setState({
					potPlaces: res2,
					showPotPlaces: 'true',
					loading: false

				})
			} else {
				throw res2
			}

		} catch (err) {
			console.log(err)
			this.setState({ loading: false })
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
	}

	get = async (pos) => {
		try {
			this.setState({ loading: true })
			// let res = await (await fetch(`http://192.168.43.94:8000/api/pioneer/${this.state.position[0]}-${this.state.position[1]}`,
			let res = await (await fetch(`${config.base_url}/api/pioneer/stations/${pos.lat}-${pos.long}`,
				{
					headers: {
						'Accept': 'application/json, text/plain, */*',
						'Content-Type': 'application/json'
					}
				}
			)).json();
			this.setState({
				stations: res.map((s) => {
					return ({
						name: s.name,
						address: s.address,
						id: s.id,
						pos: { lat: s.coord.lat, long: s.coord.long, },
						petrol: s.petrol,
						days_open: s.days_open,
						edited: s.edited || false,
						openingTime: s.openingTime,
						closingTime: s.closingTime
					})
				}),
				location: {
					lat: pos.lat,
					long: pos.long

				},
				loading: false
			});
		} catch (err) {
			// todo: 
			this.setState({ loading: false })
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
	handleKeyPress = (event) => {
		if (event.key === 'Enter') {
			// console.log('enter press here! ')
			this.getLocGmap();
			this.setState({ loading: true })
		}
	}

	render() {
		let dropdown = <div className='dropdown' >
			<div className="searchbar">
				<select
					style={{ padding: '7px', flexGrow: 1 }}
					onChange={(ev) => { this.setState({ state: ev.target.value }) }}
					defaultValue='Lagos'
				>
					{states.map((s, id) => {
						return (
							<option key={id} value={s} >{s}</option>
						);
					})}
				</select>
				<input autoFocus={true} onChange={(ev) => { this.setState({ address: ev.target.value }) }} style={{ flexGrow: 2, padding: '7px' }} placeholder='Please enter your address ex.27 road Festac, No 2 Ipodo street' onKeyPress={this.handleKeyPress} />
				<div>
					<button style={{ borderRadius: 0, padding: '5px 5px', fontSize: '15px' }} className='wide' onClick={this.getLocGmap}> Search </button>
				</div>
			</div>
			<div className='dropdown-content' style={{ display: `${this.state.showPotPlaces ? 'block' : 'none'}` }}>
				{
					this.state.potPlaces.length > 0 ?
						this.state.potPlaces.map((pp, id) => {
							return (
								<div onClick={(ev) => { this.setState({ showPotPlaces: false }); this.get(pp.pos) }} key={id} style={{ display: 'flex', flexDirection: 'column', padding: '5px' }}>
									<p style={{ fontSize: 15 }}>{pp.name}</p>
								</div>
							)
						}) : <div onClick={() => { this.setState({ showPotPlaces: false }) }} style={{ display: 'flex', flexDirection: 'column', padding: '5px', cursor: 'pointer' }}>
							<p style={{ fontSize: 15 }}>No places match that name</p>
						</div>
				}
			</div>
		</div>

		let map = <Map
			// eslint-disable-next-line
			style='mapbox://styles/mapbox/streets-v9'
			containerStyle={{
				height: `${this.state.windowDimensions.width < 600 ? '40vh' : '70vh'}`,//`${0.7 * this.state.windowDimensions.height}px`,
				width: `${this.state.windowDimensions.width < 600 ? '100%' : '50vw'}`
			}}
			// center={[this.state.location.long, this.state.location.lat]}
			center={[this.state.location.long, this.state.location.lat]}
			zoom={[13]}
		>
			{this.state.stations !== '' ?
				<Fragment>
					<Layer
						type="circle"
						id="markerF"
						paint={{
							"circle-color": "#ff5200",
							"circle-stroke-width": 1,
							"circle-stroke-color": "#fff",
							"circle-stroke-opacity": 1
						}}
					// type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}
					>
						{this.state.stations.filter((s) => { return (!s.edited === true) }).map((s, id) => {
							return (<Feature key={s.id} onClick={(ev) => { this.select(s) }} coordinates={[s.pos.long, s.pos.lat]} />)
						})}
					</Layer>

					<Layer
						type="circle"
						id="marker"
						paint={{
							"circle-color": "#2deb0c",
							"circle-stroke-width": 1,
							"circle-stroke-color": "#fff",
							"circle-stroke-opacity": 1
						}}
					// type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}
					>
						{this.state.stations.filter((s) => { return (s.edited === true) }).map((s, id) => {
							return (<Feature key={s.id} onClick={(ev) => { this.select(s) }} coordinates={[s.pos.long, s.pos.lat]} />)
						})}
					</Layer>

					<Layer
						type="circle"
						id="Smarker"
						paint={{
							"circle-color": "rgba(34, 34, 34, 0)",
							"circle-stroke-width": 2,
							"circle-stroke-color": "#0c86eb",
							"circle-stroke-opacity": 1,
						}}
					>
						{this.state.stationSel ?
							<Feature /* onClick={(ev) => { alert('s') }}  */ coordinates={[this.state.stationSel.pos.long, this.state.stationSel.pos.lat]} />
							: ''

						}

					</Layer>
				</Fragment>
				: null

			}</Map>

		let Slist = <div className='Slist'
			style={{ height: `${this.state.windowDimensions.width < 600 ? '40vh' : '70vh'}` }}
		>
			<h2>Nearby filling stations</h2>
			<hr />
			<ul>
				{this.state.stations !== '' ?
					<StationList selectFunc={this.select} selected={this.state.stationSel} stations={this.state.stations} reff={this.active} />
					: <p style={{ fontSize: 20 }}>Please choose a location to show list of available stations</p>}
			</ul>
		</div>

		return (
			<LoadingOverlay
				active={this.state.loading}
				spinner
			>
				<div /* onClick={()=>{alert(this.state.windowDimensions.width)} */ className="main main2" >
					{
						this.state.windowDimensions.width < 600 ?

							<div className='mobileMapView'>
								{map}

								{dropdown}

								{Slist}
							</div>

							:
							<div className='pcMapView'>
								{dropdown}

								<div className="F-row">
									{map}

									{Slist}
								</div>

							</div>
					}
					<button className={!this.state.stationSel ? 'wide disabled' : 'wide'} onClick={this.next}> Next </button>
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
				</div>
			</LoadingOverlay >
		)
	}
}

export default Station_Select;