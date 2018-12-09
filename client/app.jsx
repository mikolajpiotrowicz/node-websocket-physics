import React from 'react'
import {Route, Switch, withRouter} from "react-router";
import isNode from 'detect-node';
import Index from "./routes/index";
import Game from './routes/game'
import { hot } from 'react-hot-loader';

class App extends React.Component {
	constructor() {
		super();
	}
	


	render() {
		return (
			<Switch>
				<Route path="/" exact component={Index}/>
        <Route path="/game" exact component={Game}/>
			</Switch>
		)
	}
}

export default hot(module)(withRouter(App));
