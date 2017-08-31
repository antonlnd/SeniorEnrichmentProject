import React, { Component } from 'react'
import axios from 'axios'
import {Media, Left, Body, Heading } from 'react-bootstrap'
import Chance from 'chance'
const chance = new Chance()

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
				{schools}
			</div>
		)
	}
}


