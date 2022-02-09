require('./models/database') 					// connect database (import whole module)
const express = require('express')
const cors = require('cors')

const userRouter = require('./routes/userRoute')
const utilHandler = require('./util')

const app = express()

app.use(express.json('10k'))  				// allow send data as JSON format upto 10KB
app.use(cors()) 											// allow all origin

// user router handler
app.use('/api/users', userRouter)


// handle non-existing route with default message
app.all('*', utilHandler.nonExistingRouteHandler)

// handle express global errors, this error comes from handle unwanted crushed catchAsync middleware
app.use(utilHandler.expressGlobalErrorHandler)


// Run Application
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
