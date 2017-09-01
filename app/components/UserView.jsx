import { Button, Col, ControlLabel, Form, FormControl, FormGroup } from 'react-bootstrap'
import React, { Component } from 'react'
import store, { getCampus, getEmail, postUser, updateUsername } from '../store'
// import { Form, Field } from 'react-redux-form';
import { isEmail, isNull } from 'validator'
import axios from 'axios'

export default class CreateStudent extends Component {
	constructor() {
		super()
		this.state = store.getState()

		this.handleChangeUserName = this.handleChangeUserName.bind(this)
		this.handleChangeEmail = this.handleChangeEmail.bind(this)
		this.handleChangeCampus = this.handleChangeCampus.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	componentDidMount() {
		console.log(this.state)
		this.unsubscribe = store.subscribe(() => this.setState(store.getState()))

		//Set state of available campuses
		axios.get('/api/authenticate')
		     .then(res => res.data)
		     .then(campuses => this.state.data = campuses)
	}

	componentWillUnmount() {
		this.unsubscribe()
	}

	handleChangeUserName( evt ) {
		store.dispatch(updateUsername(evt.target.value))

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
		const { email, username, campus} = this.state
console.log(username)

		axios.post('/api/newuser', { email, username, campus })
		     .then(res => res.data)
		     .then(this.handleRedirect)
	}

	render() {
		const handleSubmit = this.handleSubmit
		const handleChangeEmail = this.handleChangeEmail
		const handleChangeCampus = this.handleChangeCampus
		const handleChangeUserName = this.handleChangeUserName

		const campusOptions = this.state.data.map(( campus, index ) => {
			return (
				<option key={index} value={campus.id}> {campus.name}</option>
			)
		})

		return (
			<Form horizontal onSubmit={handleSubmit}>
				<h1>Add a Student to a Campus</h1>
				<FormGroup controlId="formHorizontalEmail" onChange={handleChangeEmail}>
					<Col componentClass={ControlLabel} sm={2}>
						Student Email Address
					</Col>
					<Col sm={10}>
						<FormControl type="email" placeholder="@stanford.edu"/>
					</Col>
				</FormGroup>
				<FormGroup controlId="formHorizontalUserName" onChange={handleChangeUserName}>
					<Col componentClass={ControlLabel} sm={2}>
						Full Name
					</Col>
					<Col sm={10}>
						<FormControl type="text" placeholder="John Babkin"/>
					</Col>
				</FormGroup>

				<FormGroup controlId="formHorizontalCampus" onChange={handleChangeCampus}>

					<Col componentClass={ControlLabel} sm={2}>
						Student Campus
						<select>
							{campusOptions}
						</select>
					</Col>

				</FormGroup>

				<FormGroup>
					<Col xs={6} md={4}>
						<Button type="submit">
							Create Student!
						</Button>
					</Col>
				</FormGroup>
			</Form>
		)
	}
}


