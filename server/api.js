'use strict'
const api = require('express').Router()
const app = require('express')()
const db = require('../db')
const bodyParser = require('body-parser')
app.use(bodyParser.json()) // handle json data
app.use(bodyParser.urlencoded({ extended: true }))
const Sequelize = require('sequelize')
const Campus = require('../db/models/Campus.js')
const Student = require('../db/models/Students.js')

api.get('/authenticate', ( req, res, next ) => {
	Campus.findAll({})
	      .then(info => res.json(info))
	      .catch(next)
})

api.post('/get_campus_id', ( req, res, next ) => {
	console.log(req.body)
	Campus.findById(req.body.val)
	      .then(( data ) => res.json(data))
	      .catch(next)
})

api.post('/delete', ( req, res, next ) => {
	console.log(req.body)

	Student.find({
		where: {
			name: req.body.data
		}
	}).then(( info ) => info.destroy()).then(console.log)
})
api.post('/deleteCampus', ( req, res, next ) => {
	console.log(req.body)

	Campus.find({
		where: {
			id: req.body.data
		}
	}).then(( info ) => info.destroy()).then(console.log)
})

api.put('/updateuser', (req, res , next)   => {

	const name =  req.body.name
	const username = req.body.username
	const campus = req.body.campus
	const email = req.body.email

	Student.update({
		name: name,
		CampusId: campus,
		email: email
	}, {
		where: {id: username},
	}).then(updated => res.json(updated))

} )




api.post('/update/:studentId', ( req, res, next ) => {                                                   4
	console.log(req.params.studentId)

	// Student.find({
	// 	where: {
	// 		name: req.body.data
	// 	}
	// }).then(( info ) => info.destroy()).then(console.log)
})

api.get('/getstudents', ( req, res, next ) => {
	Student.findAll({})
	       .then(info => res.json(info))
	       .catch(next)
})

api.post('/newuser', ( req, res, next ) => {
	Student.create({
		name    : req.body.name,
		email   : req.body.email,
		CampusId: req.body.campus,
	}).then(data => res.json(data))
	       .catch(next)
})

api.post('/newcampus', ( req, res, next ) => {
	Campus.create({
		name : req.body.campus,
		image: req.body.image,
	}).then(data => res.json(data))
	      .catch(next)

})

api.post('/singlestudent', ( req, res, next ) => {
	const id = req.body.thisId

	Campus.findById(id)
	      .then(data => res.json(data))

})

api.post('/singlestudentid', ( req, res, next ) => {
	Student.findOne({where: {email: req.body.thisStudentId}})
	       .then(data => res.json(data))
	       .catch(next)

})

api.post('/singlecampus', ( req, res, next ) => {
	const campusId = req.body.campusId
	Student.findAll({
		where: {
			CampusId : campusId
		}})
	       .then(data => res.json(data))
	       .catch(next)

})

module.exports = api
