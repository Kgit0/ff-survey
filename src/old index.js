import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			value:null
		}
	}
	render() {
		return (
			<button className="square" onClick={() => { this.props.onClick()}}>
				{this.props.value}
				{/* TODO */}
			</button>
		);
	}
}

class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			squares: Array(9).fill(null)
		}
	}


	renderSquare(i) {
		return <Square
			value={this.state.squares[i]}
			onClick={()=>this.handleClick(i)}
		/>;
	}

	handleClick(i) {
		alert(i)
		let squares = this.state.squares.slice();
		squares[i] = 'X';
		this.setState({ squares: squares });
	}
	render() {
		const status = 'Next player: X';

		return (
			<div>
				<div className="status">{status}</div>
				<div className="board-row">
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>
				<div className="board-row">
					{this.renderSquare(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}
				</div>
				<div className="board-row">
					{this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}
				</div>
			</div>
		);
	}
}

class Game extends React.Component {
	/* constructor(props) {
		super(props)
	} */


	render() {
		return (
			<div className="game">
				<div className="game-board">
					<Board />
				</div>
				<div className="game-info">
					<div>{/* status */}</div>
					<ol>{/* TODO */}</ol>
				</div>
			</div>
		);
	}
}

// ========================================

ReactDOM.render(
	<Game />,
	document.getElementById('root')
);


{/* <Map className='map' center={[6.4591597, 3.2037838]} zoom={13} style={{ width: '500px', height: '500px' }}>
							<TileLayer
								attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
								url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
							/>
							{/* {this.state.stations.map((st, id) => {
							return (
								<Marker key={id} position={this.state.position}>
									<Popup>
										A pretty CSS3 popup. <br /> Easily customizable.
          							</Popup>
								</Marker>
							)
						})} */}

{/* </Map> */ } * /}