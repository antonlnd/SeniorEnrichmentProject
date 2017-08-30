'use strict'
const Sequelize = require('sequelize')
/* var db = require('../index.js')*/
const db = require('../index')
const Campus = require('./Campus')
const Student = db.define('Student', {
	name         : { type: Sequelize.STRING },
	email        : { type: Sequelize.STRING, allowNull: false, isEmail: true },
	campus: Sequelize.STRING,
	password: {
		type: Sequelize.STRING,
	}
})
module.exports = Student
