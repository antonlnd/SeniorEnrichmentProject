import { Button, Col, ControlLabel, Form, FormControl, FormGroup } from 'react-bootstrap'
import React, { Component } from 'react'
import store, { getCampus, getEmail, postUser, updateUsername , getName} from '../store'
// import { Form, Field } from 'react-redux-form';
import { isEmail, isNull } from 'validator'
import axios from 'axios'

export default class EditUser extends Component {
	constructor() {
		super()
		this.state = store.getState()

		this.handleChangeUserName = this.handleChangeUserName.bind(this)
		this.handleChangeEmail = this.handleChangeEmail.bind(this)
		this.handleChangeCampus = this.handleChangeCampus.bind(this)
		this.handleChangeName= this.handleChangeName.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}


	componentDidMount() {

		//Set state of available campuses
		axios.get('/api/getstudents')
		     .then(res => res.data)
		     .then(students => this.state.data = students)
		//Set state of users
		axios.get('/api/authenticate')
		     .then(res => res.data)
		     .then(campuses => this.state.data1 = campuses)

		console.log(this.state)
		this.unsubscribe = store.subscribe(() => this.setState(store.getState()))
	}

	componentWillUnmount() {
		this.unsubscribe()
	}

	handleChangeUserName( evt ) {
		store.dispatch(updateUsername(evt.target.value))

	}

	handleChangeName( evt ) {
		store.dispatch(getName(evt.target.value))

	}

	handleChangeEmail( evt ) {
		store.dispatch(getEmail(evt.target.value))
		console.log(this.state)

	}

	handleRedirect( res ) {
		window.location.href = 'http://localhost:1337/#/Students'
	}

	handleChangeCampus( evt ) {
		store.dispatch(getCampus(evt.target.value))
		console.log(this.state)

	}

	handleSubmit( event ) {
		event.preventDefault()
		console.log(event.target.value)
		const { email, name, campus , username } = this.state


		axios.put('/api/updateuser', { email, name, campus, username })
		     .then(res => res.data)
		     .then(this.handleRedirect)
	}

	render() {
		const handleSubmit = this.handleSubmit
		const handleChangeEmail = this.handleChangeEmail
		const handleChangeCampus = this.handleChangeCampus
		const handleChangeUserName = this.handleChangeUserName
		const handleChangeName = this.handleChangeName


		console.log(this.state.data1)
		const campusOptions = this.state.data1.map(( campus, index ) => {
			return (
				<option key={index} value={campus.id}> {campus.name}</option>
			)
		})

		const studentOptions = this.state.data.map(( student, index ) => {
			return (
				<option key={index} value={student.id}> {student.name}</option>
			)
		})


		return (
			<Form horizontal onSubmit={handleSubmit}>
				<h1>Edit Student</h1>
				<FormGroup controlId="formHorizontalSelectStudent" onChange={handleChangeUserName}>
					<Col componentClass={ControlLabel} sm={3}>
						Select Student to edit:
					</Col>
					<Col sm={10}>
						<select>
							{studentOptions}
						</select>
					</Col>
				</FormGroup>

				<FormGroup controlId="formHorizontalSelectCampus" onChange={handleChangeCampus}>
					<Col componentClass={ControlLabel} sm={3}>
						Select Student campus:
					</Col>
					<Col sm={10}>
						<select>
							{campusOptions}
						</select>
					</Col>
				</FormGroup>
				<FormGroup controlId="formHorizontalEmail" onChange={handleChangeEmail}>
					<Col componentClass={ControlLabel} sm={2}>
						Updated Email Address
					</Col>
					<Col sm={10}>
						<FormControl type="email" placeholder="@stanford.edu"/>
					</Col>
				</FormGroup>

				<FormGroup controlId="formHorizontalUserName" onChange={handleChangeName}>
					<Col componentClass={ControlLabel} sm={2}>
						Updated Student Name
					</Col>
					<Col sm={10}>
						<FormControl type="text" placeholder="John Babkin"/>
					</Col>
				</FormGroup>

				<FormGroup>
					<Col xs={6} md={4}>
						<Button type="submit">
							Update student!
						</Button>
					</Col>
				</FormGroup>
			</Form>
		)
	}
}


