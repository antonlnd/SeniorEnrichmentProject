import React, { Component } from 'react'
import { Link } from 'react-router'
import { Table , Button} from 'react-bootstrap'
import axios from 'axios'

export default class Students extends Component {
	constructor( props ) {
		super(props)
		this.state = { students: [] , campuses : {}, deleteUser:''}
        this.handleDelete = this.handleDelete.bind(this)
	}

	handleDelete( evt )  {
	      const data = evt.target.value
	       axios.post('/api/delete', {data} )
	        .then(res => res.data)
	           .then(window.location.reload())
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
			return (<tr key={index} >
				<td>{val.id}</td>
				<td >
                   <a href={`/#/single/${val.email}/${val.CampusId}`}>  {val.name} </a>
                </td>
				<td>
				  <a href={`/#/single/${val.email}/${val.CampusId}`}> {val.email}</a>
				   </td>
				   <td>
				    <Button bsStyle="info"  bsSize="xs" >Edit</Button>
				  </td>
				  <td>
                    <Button bsStyle="danger" value={val.name} bsSize="xs" onClick={this.handleDelete.bind(this)}>Delete</Button>
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
							<th>  </th>
							<th >  </th>
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


