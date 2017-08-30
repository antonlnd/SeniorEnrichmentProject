import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import axios from 'axios'

export default class Students extends Component {
	constructor( props ) {
		super(props)
		this.state = { students: [] }
	}

	componentDidMount() {
		axios.get('/api/getstudents')
		     .then(res => res.data)
		     .then(students => {
			     this.setState({ students })
		     })

	}

	render() {
		const students = this.state.students.map(( val, index ) => {
			return (<tr key={index}>
				<td>{val.id}</td>
				<td>{val.name}</td>
				<td>{val.email}</td>
				<td>{val.campus}</td>
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
							<th> Student Campus</th>
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


