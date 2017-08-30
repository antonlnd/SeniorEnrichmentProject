import React, { Component } from 'react'
import { Button, Checkbox, Col, ControlLabel, Form, FormControl, FormGroup } from 'react-bootstrap'

const formSignup = () => {
	return (
		<Form inline className="signupForm">
			<h2>Sign Up NOW</h2>
			<FormGroup controlId="formInlineName">
				<ControlLabel>Name</ControlLabel>
				<FormControl type="text" placeholder="Jane Doe"/>
			</FormGroup>
			<FormGroup controlId="formInlineEmail">
				<ControlLabel>Email</ControlLabel>
				<FormControl type="email" placeholder="jane.doe@example.com"/>
			</FormGroup>
			<FormGroup controlId="formInlinePassword">
				<ControlLabel>Password</ControlLabel>
				<FormControl type="password" placeholder="**************"/>
			</FormGroup>
			<Button type="submit">
			Signup !
			</Button>
		</Form>

	)
}


export default class DesignForm extends Component {
	constructor( props ) {
		super(props)
		this.state = {
			username: '', password: ''
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)

	}

	handleChange( event ) {
		this.setState(event.target.name)
		console.log(this.state.name)
	}

	handleSubmit( event ) {
		const {name,email,password} = this.state
		store.dispatch(postUser({ name, email, password }));
		console.log(name,email,password)
	}

	render() {
		const username = this.state.username
		return (
			<p>
				<Form horizontal className="userpass" >
					<FormGroup controlId="formHorizontalEmail">
						<Col componentClass={ControlLabel} sm={8}>
							Email
						</Col>
						<Col sm={10}>
							<FormControl type="email" placeholder="Email"  />
						</Col>
					</FormGroup>

					<FormGroup controlId="formHorizontalPassword">
						<Col componentClass={ControlLabel} sm={8}>
						Password
						</Col>
						<Col sm={10}>
							<FormControl type="password" placeholder="Password"/>
						</Col>

					</FormGroup>

					<FormGroup>
						<Col smOffset={2} sm={10}>
							<Button type="submit">
							Sign in
							</Button>
						</Col>
					</FormGroup>

				</Form>
			</p>
		)
	}
}


// value={username} onChange={this.handleChange}
