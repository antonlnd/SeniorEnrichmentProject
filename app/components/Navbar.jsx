import React, { Component } from 'react'
import { MenuItem, Nav, NavDropdown, NavItem, PageHeader } from 'react-bootstrap'

export default class Navbar extends Component {
	render() {
		return (
			<Nav bsStyle="tabs" activeKey="1" className="nav">
				<PageHeader class="page-header">  Margaret Hamilton Interplanetary Academy of JavaScript
				</PageHeader>
				<NavItem eventKey="1" href="/#/Home">Home</NavItem>
				<NavItem eventKey="2" title="Item" href="/#/Students">View Students</NavItem>
				<NavItem eventKey="2" title="Item" href="/#/Campuses">View Campuses</NavItem>
				<NavDropdown eventKey="4" title="Dropdown" id="nav-dropdown" >
					<MenuItem eventKey="4.1" href="/#/Signup" >Add a Student</MenuItem>
					<MenuItem divider/>
					<MenuItem eventKey="4.2" href="/#/AddCampus" >Add a Campus</MenuItem>
					<MenuItem divider/>
					<MenuItem eventKey="4.3" href="/#/updatecampus" >Edit Campus</MenuItem>
					<MenuItem divider/>
					<MenuItem eventKey="4.3"  href="/#/updatestudent" >Edit Student</MenuItem>
				</NavDropdown>
			</Nav>
		)
	}
}
