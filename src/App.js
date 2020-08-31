import React, { Component } from 'react';
import { Route, Switch,Redirect} from 'react-router-dom';
import './assets/css/app.css'

import Intro from './screens/Intro'
import Station_Select from './screens/Station_Select'
import Form from './screens/Form'
import Appreciation from './screens/Appreciation'

console.log(process.env.PUBLIC_URL)

class app extends Component {
	// constructor(props) {
	// 	super(props)
	// }

	render() {
			return (
				// <main>
					<Switch>
					{/* <Route path="/ff-survey/" component={Intro} exact /> */}
						<Redirect from="/ff-survey/" to="/ff-survey/Intro" exact/>
						<Route path="/ff-survey/Intro" component={Intro} />
						<Route path="/ff-survey/Select" component={Station_Select} />
						<Route path="/ff-survey/Form" component={Form} /> {/* render={(props) => <Form{...props} location={props.location}/>}/> */}
						<Route path="/ff-survey/Appreciation" component={Appreciation} />{/* render={(props) => <Appreciation{...props} location={props.location} />} /> */}
					</Switch>
				// </main>
			);
		}
	
		
	}
	
// http://kgit0.github.io/ff-survey"

export default app;