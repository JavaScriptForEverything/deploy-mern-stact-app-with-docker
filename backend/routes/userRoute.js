const express = require('express')
const userController = require('../controllers/userController')

// single line export + variable to use it later
module.exports = router = express.Router()

router.route('/')
	.get(userController.getAllUsers)
	.post(userController.addUser)

router.route('/:id')
	.delete(userController.deleteUser)



