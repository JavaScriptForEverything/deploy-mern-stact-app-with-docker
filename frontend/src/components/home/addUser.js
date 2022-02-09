import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { formValidator } from '../../util'
import { addUser } from '../../store/userReducer'
import { showAlert } from '../../store/layoutReducer'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'


const fieldItems = [
	{ label: 'User Name', name: 'name', type: 'text' },
	{ label: 'Email Address', name: 'email', type: 'email' },
]




const AddUserComponent = () => {
	const dispatch = useDispatch()
	const [ fields, setFields ] = useState({name: '', email: ''})
	const [ fieldsError, setFieldsError ] = useState({name: '', email: ''})
	const [ isSubmit, setIsSubmit ] = useState(false)

	const { error } = useSelector(state => state.users)

	useEffect(() => {
		error && dispatch(showAlert({open: true, severity: 'error', message: error}))
	}, [dispatch, error])


	const changeHandler = (name) => (evt) => {
		setFields({ ...fields, [name]: evt.target.value })
		setIsSubmit(false)
	}
	const submitHandler = (evt) => {
		evt.preventDefault()

		const isValid = formValidator(fields, setFieldsError)
		if(!isValid) return

		setIsSubmit(true)
		dispatch(addUser(fields))
		dispatch(showAlert({open: true, severity: 'success', message: 'user added successfully!!!'}))
	}


	return (
		<Container maxWidth='xs'>
			<form onSubmit={submitHandler} noValidate>
				{fieldItems.map(({label, name, type}, key) => <TextField key={key}
					label={label}
					placeholder={label}
					type={type}
					margin='dense'
					InputLabelProps={{ shrink: true }}
					fullWidth
					autoFocus={ key === 0 }

					value={fields[name]}
					onChange={changeHandler(name)}

					error={ !fields[name] || !!fieldsError[name]}
					helperText={fieldsError[name]}
				/>)}

				<Box sx={{display: 'flex', justifyContent: 'flex-end', mt: 1}}>
					<Button type='submit' variant='contained' disabled={isSubmit}>
						{isSubmit ? 'User Added' : 'Add User'}
					</Button>
				</Box>
			</form>
		</Container>
	)
}
export default AddUserComponent
