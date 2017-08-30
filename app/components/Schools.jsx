import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import axios from 'axios'

export default class Schools extends Component {
	constructor( props ) {
		super(props)
		this.state = { campus: [] }
	}

	componentDidMount() {
		axios.get('/api/authenticate')
		     .then(res => res.data)
		     .then(campus => {
			     this.setState({ campus })
		     })

	}

	render() {
		const schools = this.state.campus.map(( val, index ) => {
			return (<tr key={index


			}>
				<td>{val.id}</td>
				<td>{val.name}</td>
				<td>{val.image}</td>
			</tr>
			)
		})

		return (
			<div>
				<h1>All Campuses</h1>
				<Table striped bordered condensed hover className="schools">
					<thead>
						<tr>
							<th>#</th>
							<th> Campus Name</th>
							<th> Image</th>
						</tr>
					</thead>
					<tbody>
						{schools}
					</tbody>
				</Table>
			</div>
		)
	}
}


