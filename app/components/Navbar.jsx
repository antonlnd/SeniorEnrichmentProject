import React, { Component } from 'react'
import { MenuItem, Nav, NavDropdown, NavItem, PageHeader } from 'react-bootstrap'

export default class Navbar extends Component {
	render() {
		return (
			<Nav bsStyle="tabs" activeKey="1" className="nav">
				<PageHeader class="page-header"> InterStellar University
					<small>Welcome !</small>
				</PageHeader>
				<NavItem eventKey="1" href="/#/Home">Home</NavItem>
				<NavItem eventKey="2" title="Item" href="/#/Students">View Students</NavItem>
				<NavItem eventKey="2" title="Item" href="/#/Campuses">View Campuses</NavItem>
				<NavDropdown eventKey="4" title="Dropdown" id="nav-dropdown" >
					<MenuItem eventKey="4.1" href="/#/Signup" >Add a Student</MenuItem>
					<MenuItem divider/>
					<MenuItem eventKey="4.2" href="/#/AddCampus" >Add a Campus</MenuItem>
					<MenuItem eventKey="4.3">Edit Campus</MenuItem>
					<MenuItem eventKey="4.3">Edit Student</MenuItem>
					<MenuItem eventKey="4.3">Delete Student</MenuItem>
					<MenuItem eventKey="4.4">Separated link</MenuItem>
				</NavDropdown>
			</Nav>
		)
	}
}
