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

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
// I know this because we automatically send index.html for all requests that don't make sense in our backend.
// Ideally you would have something to handle this, so if you have time try that out!
// api.get('/hello', (req, res) => res.send({hello: 'world'}))
// api.get('/login'), (req, res) => {
// 	db.findAll({
// 		where: {
// 			ie: req.body.password ===
// 		}
// 	})
// }

// api.get('/authenticate', (res ) => {
//
// 	Campus.findOrBuild({
// 		where: {
// 			name: 'anton landauer',
// 			image: 'www.gooooooooooooooooooogle.com'
// 		}}).then(resul => console.log('synced'))
// })
//

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



module.exports = api
