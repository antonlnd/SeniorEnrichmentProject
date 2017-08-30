import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar'
import Schools from './Schools'
import DesignForm from './Login'
import Signup from './Signup'
import { Provider } from 'react-redux'
import store from '../store'
import UserView from '../components/UserView'

export default class Main extends Component {

	render() {

		return (
			<Provider store={store}>
				<Router>
					<div id="main" className="container-fluid">
						<Route path="/" component={Navbar}/>
						<Switch>v
							<Route path={'/user/' + store.getState().name } component={DesignForm}/>
							<Route exact path="/Campuses" component={Schools}/>
							<Route exact path="/Home" component={DesignForm}/>
							<Route exact path="/Signup" component={UserView}/>
						</Switch>
					</div>
				</Router>
			</Provider>
		)
	}
}
{/*<Route exact path="/Students"  />*/}
