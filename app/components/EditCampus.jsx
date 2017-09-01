import { Button, Col, ControlLabel, Form, FormControl, FormGroup } from 'react-bootstrap'
import React, { Component } from 'react'
import store, { getCampus, getEmail, postUser, updateUsername, getImg, getCampusId } from '../store'
// import { Form, Field } from 'react-redux-form';
import { isEmail, isNull } from 'validator'
import axios from 'axios'

export default class CreateCampus extends Component {
	constructor() {
		super()
		this.state = store.getState()

		this.handleChangeCampusName = this.handleChangeCampusName.bind(this)
		this.handleChangeImageHREF = this.handleChangeImageHREF.bind(this)
		this.handleChangeCampus = this.handleChangeCampus.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	componentDidMount() {
		this.unsubscribe = store.subscribe(() => this.setState(store.getState()))
		axios.get('/api/authenticate')
		     .then(res => res.data)
		     .then(campuses => this.state.data1 = campuses)
	}


	componentWillUnmount() {
		this.unsubscribe()
	}

	handleChangeCampusName( evt ) {
		store.dispatch(getCampus(evt.target.value))

	}

	handleChangeCampus( evt ) {
		store.dispatch(getCampusId(evt.target.value))
		console.log(this.state)

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
		const {  campus , image , campusId} = this.state

		axios.put('/api/updatecampus', { campus , image , campusId})
		     .then(res => res.data)
		     .then(this.handleRedirect)

	}

	render() {
		const handleSubmit = this.handleSubmit
		const handleChangeCampus = this.handleChangeCampus
		const handleChangeCampusName = this.handleChangeCampusName
		const handleChangeImageHREF = this.handleChangeImageHREF

		const campusOptions = this.state.data1.map(( campus, index ) => {
			return (
				<option key={index} value={campus.id}> {campus.name}</option>
			)
		})



		return (
			<Form horizontal onSubmit={handleSubmit}>
				<h1>Edit a Campus</h1>
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
				<FormGroup controlId="formHorizontalUserName" onChange={handleChangeCampusName}>
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
							Submit Campus Edit !
						</Button>
					</Col>
				</FormGroup>
			</Form>
		)
	}
}


