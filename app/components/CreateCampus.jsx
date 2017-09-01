import { Button, Col, ControlLabel, Form, FormControl, FormGroup } from 'react-bootstrap'
import React, { Component } from 'react'
import store, { getCampus, getEmail, postUser, updateUsername, getImg } from '../store'
// import { Form, Field } from 'react-redux-form';
import { isEmail, isNull } from 'validator'
import axios from 'axios'

export default class CreateCampus extends Component {
	constructor() {
		super()
		this.state = store.getState()

		this.handleChangeCampusName = this.handleChangeCampusName.bind(this)
		this.handleChangeImageHREF = this.handleChangeImageHREF.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	componentDidMount() {
		console.log(this.state)
		this.unsubscribe = store.subscribe(() => this.setState(store.getState()))
	}

	componentWillUnmount() {
		this.unsubscribe()
	}

	handleChangeCampusName( evt ) {
		store.dispatch(getCampus(evt.target.value))

	}

	handleChangeImageHREF( evt ) {
		store.dispatch(getImg(evt.target.value))
		console.log(this.state)

	}

	handleRedirect( res ) {
		window.location.href = 'http://localhost:1337/#/Campuses'
	}


	handleSubmit( event ) {
		event.preventDefault()
		const {  campus , image } = this.state

		axios.post('/api/newcampus', { campus , image })
		     .then(res => res.data)
		     .then(this.handleRedirect)

	}

	render() {
		const handleSubmit = this.handleSubmit
		const handleChangeCampusName = this.handleChangeCampusName
		const handleChangeImageHREF = this.handleChangeImageHREF

		return (
			<Form horizontal onSubmit={handleSubmit}>
				<h1>Add a Campus</h1>
				<FormGroup controlId="formHorizontalEmail" onChange={handleChangeCampusName}>
					<Col componentClass={ControlLabel} sm={2}>
						Enter Campus Name
					</Col>
					<Col sm={10}>
						<FormControl type="text" placeholder="Stanford"/>
					</Col>
				</FormGroup>
				<FormGroup controlId="formHorizontalHref" onChange={handleChangeImageHREF}>
					<Col componentClass={ControlLabel} sm={2}>
						Enter an Image (hyperlink) for your campus!
					</Col>
					<Col sm={10}>
						<FormControl type="text" placeholder="www.google.com"/>
					</Col>
				</FormGroup>


				<FormGroup>
					<Col smOffset={2} sm={10}>
						<Button type="submit">
							Add Campus !
						</Button>
					</Col>
				</FormGroup>
			</Form>
		)
	}
}
