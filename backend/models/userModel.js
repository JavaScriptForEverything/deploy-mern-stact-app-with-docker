const { Schema, model } = require('mongoose')
const { isEmail } = require('validator')

const userSchema = new Schema({
	name: {
		type: String,
		// unique: true,
		required: true,
		maxLength: 50,
		trim: true,
		lowercase: true
	},
	email: {
		type: String,
		required: true,
		unique: true,
		minLength: 3,
		maxLength: 50,
		trim: true,
		lowercase: true,
		validate: isEmail,

	},

}, {
	timestamps: true
})

module.exports = model('User', userSchema)
