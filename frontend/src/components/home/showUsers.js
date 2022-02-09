import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../../store/userReducer'
import { showAlert } from '../../store/layoutReducer'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'

import DeleteIcon from '@mui/icons-material/Delete'


const ShowUsers = () => {
	const dispatch = useDispatch()
	const { error, users } = useSelector(state => state.users)

	useEffect(() => {
		error && dispatch(showAlert({open: true, severity: 'error', message: error}))
	}, [dispatch, error])

	const removeHandler = (userId) => (evt) => {
		dispatch(removeUser(userId))
		dispatch(showAlert({open: true, severity: 'info', message: 'user deleted successfully!!!'}))
	}

	return (
		<List>
		{ users.map((user, key) => (
			<ListItem
				key={key}
				divider
				secondaryAction={<IconButton onClick={removeHandler(user._id)}> <DeleteIcon /></IconButton>}
			>
				<ListItemText>{user?.name} | {user?.email}</ListItemText>
			</ListItem>
		))}
		</List>
	)
}
export default ShowUsers
