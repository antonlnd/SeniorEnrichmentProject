import React, { Component } from 'react'
import { Link } from 'react-router'
import { Body, Button, Heading, Left, Media, PageHeader } from 'react-bootstrap'
import axios from 'axios'

export default class Students extends Component {
	constructor( props ) {
		super(props)
		this.state = { students: [], campuses: {}, deleteUser: '' }
		this.handleDelete = this.handleDelete.bind(this)
	}

	handleDelete( evt ) {
		const data = evt.target.valueaxios.post('/api/delete', { data })
		                .then(res => res.data)
		                .then(window.location.reload())
	}

	componentDidMount() {
		const url = window.location.href.split('/')
		const thisId = url[(url.length) - 1]
		const thisStudentId = url[(url.length) - 2]
		console.log(thisStudentId , "!!!!!!!!!!!!!")

		//get campus info for current student
		axios.post('/api/singlestudent', {
			thisId,
			thisStudentId
		}).then(res => res.data).then(campuses => {
			console.log(campuses)
			this.setState({ campuses })
		})

		//get student info for current student
		axios.post('/api/singlestudentid', { thisStudentId }).then(res => res.data).then(students => {
			console.log(students)
			this.setState({ students })
		})
	}

	handleDelete( evt )  {
		const data = evt.target.value
		console.log(data)
		axios.post('/api/delete', {data} )
		     .then(res => res.data)
		     .then(window.location.href = 'http://localhost:1337/#/Students')
	}

	render() {
		const students = this.state.students
		const campuses = this.state.campuses

		console.log(students, campuses)

		return (
			<div>
				<PageHeader>
					<small>{students.name} Profile</small>
				</PageHeader>
				<Media>
					<Media.Left>
						<img width={200} height={200} src={campuses.image} alt={campuses.name}/>
					</Media.Left>
					<Media.Body>
						<Media.Heading> {students.name} </Media.Heading>
						<p>Email: {students.email}</p>
						<p>Campus: <a href={`/#/campusid/${campuses.id}`}>{campuses.name}</a></p>
						<p><Button bsStyle="info" bsSize="xs">Edit</Button></p>
						<p><Button bsStyle="danger" bsSize="xs"  value= {students.name} onClick={this.handleDelete.bind(this)}>Delete</Button>
						</p>

					</Media.Body>
				</Media>
			</div>
		)
	}
}
