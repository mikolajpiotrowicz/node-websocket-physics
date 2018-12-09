import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from "./client/app";
import './client/style/style.scss';
import {AppContainer} from "react-hot-loader";


ReactDOM.hydrate(
	<AppContainer>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</AppContainer>
	, document.getElementById('root'));