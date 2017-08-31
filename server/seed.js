const db = require('../db')
const Sequelize = require('sequelize')
const Campus = require('../db/models/Campus.js')
const Student = require('../db/models/Students.js')
const Chance = require('chance')
const chance = new Chance()


//student const
const studentName = []
const studentEmail = []
const studentCampusId = []

//campus const 
const campusName = []
const campusImage = []
const promises = []
for (var i = 0; i < 50; i++) {
	campusName
		.push(` ${chance.capitalize(chance.company()).split('Inc' || 'Corp' || '&').join(' ').split(' ')[1]}  ${chance.capitalize(chance.profession()).split(' ')[0]} University`)

	campusImage
		.push(`http:${chance.avatar()}`)
}

campusName.map(( val, idx ) => {
	promises.push(Campus.create({ name: val, image: campusImage[idx] }))
})


for (var i = 0; i < 500; i++) {
	studentEmail
		.push(chance.email())

	studentName
		.push(chance.name())
	studentCampusId
		.push(Math.floor(Math.random() * 50))
}



studentEmail.map(( val, idx ) => {
	promises
		.push(
			Student.create(
				{ name: studentName[idx], email: val , CampusId : studentCampusId[idx] }
			))
})

Promise.all(promises).then(console.log)

// Campus.create({
//
// 	name: chance.name(),
// 	email:  chance.email(),
// 	CampusId: Math.floor(Math.random() * 50)
//
// 	})
// Student.create({
// 	name: chance.name(),
// 	email:  chance.email(),
// 	CampusId: Math.floor(Math.random() * 50)
// })
//
//
