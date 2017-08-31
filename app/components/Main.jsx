import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar'
import Schools from './Schools'
import DesignForm from './Login'
import Signup from './Signup'
import Students from './StudentList'
import { Provider } from 'react-redux'
import store from '../store'
import UserView from '../components/UserView'
import CreateCampus from '../components/CreateCampus'
import DetailedStudent from '../components/DetailedStudent'
import DetailedCampus from '../components/DetailedCampus'

export default class Main extends Component {

	render() {

		return (
			<Provider store={store}>
				<Router>
					<div id="main" className="container-fluid">
						<Route path="/" component={Navbar}/>
						<Switch>
							<Route path={'/user/' + store.getState().name } component={DesignForm}/>
							<Route exact path="/Campuses" component={Schools}/>
							<Route exact path="/Students" component={Students}/>
							<Route  path="/single/" component={DetailedStudent}/>
							<Route  path="/campusid/" component={DetailedCampus}/>
							<Route exact path="/Home" component={DesignForm}/>
							<Route exact path="/Signup" component={UserView}/>
							<Route exact path="/AddCampus" component={CreateCampus}/>
						</Switch>
					</div>
				</Router>
			</Provider>
		)
	}
}
{/*<Route exact path="/Students"  />*/}
