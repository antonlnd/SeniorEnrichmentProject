import React, { Component } from 'react'
import axios from 'axios'
import { Body, Heading, Left, Media , Button} from 'react-bootstrap'
import Chance from 'chance'
import { Link } from 'react-router-dom'

const chance = new Chance()

export default class Schools extends Component {
	constructor( props ) {
		super(props)
		this.state = { campus: [] }
		this.handleDelete = this.handleDelete.bind(this)
		this.handleUpdate = this.handleUpdate.bind(this)
	}

	handleDelete( evt ) {
		const data = evt.target.value
		console.log(data)
		axios.post('/api/deleteCampus', { data })
		.then(res => res.data)
		     .then(window.location.reload())
	}

	handleUpdate( evt ) {
		window.location.href = 'http://localhost:1337/#/updatestudent'
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
						<Media.Heading> <Link to={`/campusid/${val.id}`}> {val.name} </Link> </Media.Heading>
						<p>{chance.sentence()}</p>
						<p><Button bsStyle="info" bsSize="xs" > </Button></p>
						<p><Button bsStyle="danger" bsSize="xs" value={val.id} onClick={this.handleDelete.bind(this)} >Delete</Button>
						</p>
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


