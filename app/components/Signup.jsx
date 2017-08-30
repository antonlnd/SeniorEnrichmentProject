import { Button, Col, ControlLabel, Form, FormControl, FormGroup } from 'react-bootstrap'
import React, { Component } from 'react'
import store, { getEmail, getPassword, postUser, updateUsername } from '../store'
// import { Form, Field } from 'react-redux-form';
import { isEmail, isNull } from 'validator';
import axios from 'axios'

export default class Signup extends Component {
	constructor() {
		super()
		this.state = store.getState()

		this.handleChangeUserName = this.handleChangeUserName.bind(this)
		this.handleChangeEmail = this.handleChangeEmail.bind(this)
		this.handleChangePassword = this.handleChangePassword.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	componentDidMount() {
		console.log(this.state)
		this.unsubscribe = store.subscribe(() => this.setState(store.getState()))
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

	handleChangePassword( evt ) {
		store.dispatch(getPassword(evt.target.value))
		console.log(this.state)

	}

	handleSubmit( event ) {
		event.preventDefault();
		const {email, name, password} = this.state
		console.log(email,name,password)
		console.log(this.state)
		axios.post('/api/newuser',{email, name, password})
			.then(res => res.data)
		console.log('done')
	}

	render() {
		const handleSubmit = this.handleSubmit
		const handleChangeEmail = this.handleChangeEmail
		const handleChangePassword = this.handleChangePassword
		const handleChangeUserName = this.handleChangeUserName


		return (
			<Form horizontal onSubmit={handleSubmit}>
				<h1>Sign up to view / edit students & campuses</h1>
				<FormGroup controlId="formHorizontalEmail" onChange={handleChangeEmail}>
					<Col componentClass={ControlLabel} sm={2}>
						Email
					</Col>
					<Col sm={10}>
						<FormControl type="email" placeholder="Email"/>
					</Col>
				</FormGroup>
				<FormGroup controlId="formHorizontalUserName" onChange={handleChangeUserName}>
					<Col componentClass={ControlLabel} sm={2}>
						UserName
					</Col>
					<Col sm={10}>
						<FormControl type="text" placeholder="username"/>
					</Col>
				</FormGroup>

				<FormGroup controlId="formHorizontalPassword" onChange={handleChangePassword}>
					<Col componentClass={ControlLabel} sm={2}>
						Password
					</Col>
					<Col sm={10}>
						<FormControl type="password" placeholder="Password"/>
					</Col>
				</FormGroup>

				<FormGroup controlId="formHorizontalPWORD">
					<Col componentClass={ControlLabel} sm={2}>
						Re-Enter Password
					</Col>
					<Col sm={10}>
						<FormControl type="password" placeholder="Password" onChange={handleChangePassword}/>
					</Col>
				</FormGroup>


				<FormGroup>
					<Col smOffset={2} sm={10}>
						<Button type="submit" href={'/#/user/' + this.state.name} >
							Sign in
						</Button>
					</Col>
				</FormGroup>
			</Form>
		)
	}
}

//
