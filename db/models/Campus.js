const Student = require('./Students')
const db = require('../index')
const Sequelize = require('sequelize')

const Campus = db.define('Campus', {
	name    : {
		type: Sequelize.STRING, allowNull: false
	}, image: {
		type: Sequelize.STRING,
	}
})

Campus.hasMany(Student)


module.exports = Campus
