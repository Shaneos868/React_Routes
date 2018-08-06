import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Happy from './components/Happy';
import Sleepy from './components/Sleepy';
import Guilty from './components/Guilty';



// your code goes here
class Home extends Component {
	render() {
		return (
			<Router>
				<div>
					<ul>
						<li><Link to="/index.js">Home</Link></li>
						<li><Link to="/components/happy">Happy</Link></li>
						<li><Link to="/components/sleepy">Sleepy</Link></li>
						<li><Link to="/components/guilty">Guilty</Link></li>
					</ul>
					<Route path="/components/happy" component={Happy} />
					<Route path="/components/sleepy" component={Sleepy} />
					<Route path="/components/guilty" component={Guilty} />

				</div>
			</Router>
		)
	}
};
//Each link in your navigation needs to route to the corresponding Component view.


ReactDOM.render(<Home />, document.getElementById('root'));