import React, { Component } from 'react'
import { Link } from 'react-router'
import { Table , Button} from 'react-bootstrap'
import axios from 'axios'

export default class Students extends Component {
	constructor( props ) {
		super(props)
		this.state = { students: [] , campuses : []}
		this.getCampus = this.getCampus.bind(this)
	}

	componentDidMount() {
		axios.get('/api/getstudents')
		     .then(res => res.data)
		     .then(students => {
			     this.setState({ students })
		     })

		console.log(this.getState , '!!!!!!!!!!!')

	}
	getCampus (val)  {

		axios.post('/api/get_campus_id', val)
		     .then(res => res.data)
		     .then(students => {
			     console.log(students)
		     })

	}

	render() {
		console.log(this.getCampus(25))
		const students = this.state.students.map(( val, index ) => {
			return (<tr key={index} >
					<td>{val.id}</td>
					<td >
						<a href={`/#/Students/${index}`}>  {val.name} </a>
					</td>
					<td>
						<a href={`/#/Students/${index}`}> {val.email}</a>
					</td>
					<td>
						<a href={`/#/Students/${val.CampusId}`} color="red"> Edit </a>
					</td>
					<td>
						<a href={`/#/Students/${val.CampusId}`} color="red"> Delete </a>
					</td>
				</tr>
			)
		})

		return (
			<div>
				<h1>All Students</h1>
				<Table striped bordered condensed hover className="schools">
					<thead>
					<tr>
						<th>#</th>
						<th> Student Name</th>
						<th> Student Email</th>
						<th> Edit </th>
						<th > Delete </th>
					</tr>
					</thead>
					<tbody>
					{students}
					</tbody>
				</Table>
			</div>
		)
	}
}


