const User = require('../models/userModel')
const { catchAsync, appError } = require('../util')




// GET 	/api/users
exports.getAllUsers = catchAsync(async(req, res, next) => {
	const users = await User.find()

	res.status(200).json({
		status: 'success',
		count: users.length,
		users
	})
})



// POST 	/api/users
exports.addUser = catchAsync(async (req, res, next) => {
	const user = await User.create(req.body)

	res.status(201).json({
		status: 'success',
		user
	})
})



// DELETE 	/api/users/:id
exports.deleteUser = catchAsync(async (req, res, next) => {
	const id = req.params.id

	const user = await User.findById(id)
	if(!user) return next(appError('No user Found', 404, 'AppError'))


	await User.findByIdAndDelete(id)

	// don't send any response, because statusCode 204 no require send body
	res.status(204).send()
})
