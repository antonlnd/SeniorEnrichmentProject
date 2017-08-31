import React, { Component } from 'react'
import axios from 'axios'
import { Body, Heading, Left, Media, PageHeader } from 'react-bootstrap'
import Chance from 'chance'

const chance = new Chance()

export default class Schools extends Component {
	constructor( props ) {
		super(props)
		this.state = { students: [], campus: [] }
	}

	componentDidMount() {
		const id = window.location.href.split('/')
		const campusId  = id[(id.length - 1)]
		const val = id[(id.length - 1)]
		console.log(val)

		axios.post('/api/singlecampus', { campusId })
		     .then(res => res.data)
		     .then(students => {
			     this.setState({ students })
		     })

		axios.post('/api/get_campus_id', {val})
		     .then(res => res.data)
		     .then(campus => {
		     	console.log(campus)
			     this.setState({ campus })
		     })

	}

	render() {
		const campus= this.state.campus
		console.log(campus)
		const schools = this.state.students.map(( val, index ) => {
			return (

				< Media key={index}>
					< Media.Left>
						< img
							width={64}
							height={64}
							src={val.image}
							alt={val.name}/>
					</Media.Left>
					<Media.Body>
						<Media.Heading>{val.name}</Media.Heading>
						<p>{chance.sentence()}</p>
					</Media.Body>
				</Media>
			)
		})

		return (
			<div>
				<PageHeader>
					<small>{campus.name}</small>
				</PageHeader>
				{schools}
			</div>
		)
	}
}


