import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar'
import Schools from './Schools'
import Students from './StudentList'
import { Provider } from 'react-redux'
import store from '../store'
import UserView from '../components/UserView'
import CreateCampus from '../components/CreateCampus'
import DetailedStudent from '../components/DetailedStudent'
import DetailedCampus from '../components/DetailedCampus'
import EditUser from '../components/EditUser'
import EditCampus from '../components/EditCampus'

export default class Main extends Component {

	render() {

		return (
			<Provider store={store}>
				<Router>
					<div id="main" className="container-fluid">
						<Route path="/" component={Navbar}/>
						<Switch>
							<Route exact path="/Campuses" component={Schools}/>
							<Route exact path="/Students" component={Students}/>
							<Route  path="/single/" component={DetailedStudent}/>
							<Route  path="/campusid/" component={DetailedCampus}/>
							<Route  path="/updatestudent/" component={EditUser}/>
							<Route  path="/updatecampus/" component={EditCampus}/>
							<Route exact path="/Signup" component={UserView}/>
							<Route exact path="/AddCampus" component={CreateCampus}/>
						</Switch>
					</div>
				</Router>
			</Provider>
		)
	}
}
