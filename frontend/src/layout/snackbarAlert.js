import { useDispatch, useSelector } from 'react-redux'
import { showAlert } from '../store/layoutReducer'

import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'


const SnackbarAlert = () => {
	const dispatch = useDispatch()
	const { open, severity, message } = useSelector(state => state.layout)

	return (
		<Snackbar
			open={open}
			onClick={() => dispatch(showAlert({open: false})) }
			anchorOrigin={{horizontal: 'center', vertical: 'top'}}
			autoHideDuration={3000} 					// require onClose to work
			onClose={() => dispatch(showAlert({open: false})) }
		>
			<Alert severity={severity} color={severity}>{message}</Alert>
		</Snackbar>
	)
}
export default SnackbarAlert
