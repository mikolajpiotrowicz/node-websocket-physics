import React from 'react'
import {Route, Switch, withRouter} from "react-router";
import { setInitialData } from "./helpers/initialData";
import isNode from 'detect-node';
import Index from "./routes/index";
import { hot } from 'react-hot-loader';

class App extends React.Component {
	constructor({initialData}) {
		super();
		
		if(isNode) {
			setInitialData(initialData);
		} else {
			setInitialData(JSON.parse(document.getElementById('initialData').textContent));
		}
	}
	
	componentDidMount() {
		this.unlisten = this.props.history.listen(() => {
			setInitialData(null);
		});
	}
	
	componentWillUnmount() {
		this.unlisten();
	}


	render() {
        const mock = () => (<h1>mock</h1>);
        const component = isNode ? mock : Index;
		return (
			<Switch>
				<Route path="/" exact component={component}/>
			</Switch>
		)
	}
}

export default hot(module)(withRouter(App));
