const express = require('express')
const router = express.Router();
const { getStudents, createStudents, getStudent } = require('./controller/studentcontroller')

router.route('/').get(getStudents).post(createStudents)

router.route('/:id').get(getStudent).delete().put().patch()

module.exports = router;