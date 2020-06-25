import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import './assets/css/app.css'

import Intro from './screens/Intro'
import Station_Select from './screens/Station_Select'
import Form from './screens/Form'
import Appreciation from './screens/Appreciation'

class app extends Component {
	// constructor(props) {
	// 	super(props)
	// }

	render() {
			return (
				<main>
					<Switch>
						<Route path="/" component={Intro} exact />
						<Route path="/Intro" component={Intro} />
						<Route path="/Select" component={Station_Select} />
						<Route path="/Form" component={Form} />
						<Route path="/Appreciation" component={Appreciation} />
					</Switch>
				</main>
			);
		}
	
		
	}
	


export default app;