import { isEmail } from 'validator'

export const formValidator = (obj, setErrorState) => {
	const tmpObj = {}

	if(obj?.email && !isEmail(obj.email)) tmpObj.email = 'invalid email address'

	Object.keys(obj).forEach(field => {
		if(obj[field] === '') tmpObj[field] = `${field} field is empty`
	})

	setErrorState(tmpObj)
	return Object.keys(tmpObj).every(field => field === '')
}


export const catchAsyncDispatch = (fn, setField) => (dispatch, getStore) => {
	fn(dispatch, getStore).catch(err => {
		dispatch( setField(err.response.data.message) )
	})
}
