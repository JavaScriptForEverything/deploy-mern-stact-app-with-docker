import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { catchAsyncDispatch } from '../util'


const { actions, reducer } = createSlice({
	name: 'user',
	initialState: {
		loading: false,
		error: '',
		users: [],
		user: {}
	},

	reducers: {
		requested: (state, action) => ({...state, loading: true, error: ''}),
		failed: (state, action) => ({...state, loading: false, error: action.payload}),

		getUsers: (state, action) => ({...state, loading: false, users: action.payload}),
		userAdded: (state, action) => ({
			...state,
			loading: false,
			user: action.payload,
			users: state.users.concat(action.payload)
		}),
		userRemoved: (state, action) => ({
			...state,
			loading: false,
			user: null,
			users: state.users.filter( user => user._id !== action.payload.id)
		}),
	}
})
export default reducer



export const getUsers = () => catchAsyncDispatch(async(dispatch) => {
	dispatch(actions.requested())

	const { data: { users }} = await axios.get('http://localhost:5000/api/users')
	dispatch(actions.getUsers(users))
}, actions.failed)

export const addUser = (data) => catchAsyncDispatch(async(dispatch) => {
	dispatch(actions.requested())

	const { data: { user }} = await axios.post('http://localhost:5000/api/users', {...data})
	dispatch(actions.userAdded(user))
}, actions.failed)

export const removeUser = (userId) => catchAsyncDispatch(async(dispatch) => {
	dispatch(actions.requested())

	await axios.delete(`http://localhost:5000/api/users/${userId}`)
	dispatch(actions.userRemoved({ id: userId }))
}, actions.failed)

