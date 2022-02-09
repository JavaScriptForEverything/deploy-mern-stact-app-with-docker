import { createSlice } from '@reduxjs/toolkit'

const { actions, reducer } = createSlice({
	name: 'user',
	initialState: {
		open: false,
		severity: 'error',
		message: ''

	},

	reducers: {
		showAlert: (state, action) => ({
			...state,
			...action.payload
		}),
	}
})
export default reducer


export const showAlert = (obj) => (dispatch) => {
	dispatch(actions.showAlert({...obj}))
}
