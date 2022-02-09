const { connect } = require('mongoose')

const DATABASE = process.env.DB_LOCAL_URL || 'mongodb://localhost:27017/mern-stack'
// const DATABASE = process.env.DB_LOCAL_URL

connect(DATABASE)
	.then(db => console.log(`connected to database: [${db.connection.host}]`))
	.catch(err => console.error(err.message))
