'use strict'
const api = require('express').Router()
const app = require('express')()
const db = require('../db')
const bodyParser = require('body-parser')
app.use(bodyParser.json()) // handle json data
app.use(bodyParser.urlencoded({ extended: true }))
const Sequelize = require('sequelize')
const Campuses = require('../db/models/Campus.js')
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
// 	Campuses.findOrBuild({
// 		where: {
// 			name: 'anton landauer',
// 			image: 'www.gooooooooooooooooooogle.com'
// 		}}).then(resul => console.log('synced'))
// })
//

api.get('/authenticate', ( req, res, next ) => {
	Campuses.create({
		name : 'Harvard',
		image: './harvard.png',
	})
	Campuses.findAll({}).then(info => res.json(info)).catch(next)
})

api.post('/newuser', ( req,res,next ) => {
	console.log(req.body)
	Student.create({
		name: req.body.name,
		email: req.body.email,
		campus: req.body.campus,
	}).then(data => res.json(data))
	.catch(next)

})

module.exports = api
