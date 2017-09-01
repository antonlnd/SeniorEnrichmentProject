import React, { Component } from 'react'
import axios from 'axios'
import { Body, Button, Heading, Left, Media, PageHeader } from 'react-bootstrap'
import Chance from 'chance'

const randomCat = require('random-cat')

const chance = new Chance()

export default class Schools extends Component {
	constructor( props ) {
		super(props)
		this.state = { students: [], campus: [] }
		this.handleDelete = this.handleDelete.bind(this)
		this.handleUpdate = this.handleUpdate.bind(this)
	}

	componentDidMount() {
		const id = window.location.href.split('/')
		const campusId = id[(id.length - 1)]
		const val = id[(id.length - 1)]
		console.log(val)

		axios.post('/api/singlecampus', { campusId })
		     .then(res => res.data)
		     .then(students => {
			     this.setState({ students })
		     })

		axios.post('/api/get_campus_id', { val })
		     .then(res => res.data)
		     .then(campus => {
			     console.log(campus)
			     this.setState({ campus })
		     })

	}

	handleDelete( evt ) {
		const data = evt.target.value
		axios.post('/api/delete', { data })
		     .then(res => res.data)
		     .then(window.location.reload())
	}

	handleUpdate( evt ) {
		window.location.href = 'http://localhost:1337/#/updatestudent'
	}


	render() {
		const campus = this.state.campus
		console.log(campus)
		const schools = this.state.students.map(( val, index ) => {
			return (

				< Media key={index}>
					< Media.Left>
						< img
							width={64}
							height={64}
							src={(index % 2 === 0 ? randomCat.get() : randomCat.get({ category: 'people' }))}
							alt={val.name}/>
					</Media.Left>
					<Media.Body>
						<Media.Heading>{val.name}</Media.Heading>
						<p>{chance.paragraph()}</p>
						<div><Button bsStyle="info" bsSize="sm" onClick={this.handleUpdate.bind(this)}>Edit</Button><span></span>

							<Button bsStyle="danger" bsSize="sm" value={val.name}
							        onClick={this.handleDelete.bind(this)}>Delete</Button>
						</div>
					</Media.Body>
				</Media>
			)
		})

		return (
			<div>
				<PageHeader bsClass="header3">
					{campus.name}
				</PageHeader>
				{schools}
			</div>
		)
	}
}


