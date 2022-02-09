exports.nonExistingRouteHandler = (req, res, next) => {
	res.status(404).json({
		status: 'success',
		message: `There is no route: ${req.originalUrl}`
	})
}


exports.expressGlobalErrorHandler = (err, req, res, next) => {
	/* Error can comes from 2 ways:
			1. our throw error 		: .next( appError('My error', '400', 'TokenError'))
					i. 	development Error 	: Require err.stack
					ii. production Error 		: no require err.stack + user friendly message instead of technical message

			2. system level error : unhandled error or server generated error */

	// it is just demo, so we skip the production error message feature
	res.status(err.statusCode || 500).json({
		status: err.status || 'failed',
		message: err.message,
		stack: err.stack
	})
}


// handle unwanted crushed, with default error message
exports.catchAsync = (fn) => (req, res, next) => fn(req, res, next).catch(next)

// send nice error
exports.appError = (message='', statusCode=400, status='error') => {
	const error = new Error(message)
	error.status = status
	error.statusCode = statusCode

	return error
}


