import { configureStore, combineReducers } from '@reduxjs/toolkit'
import layoutReducer from './layoutReducer'
import userReducer from './userReducer'

const reducer = combineReducers({
	layout: layoutReducer,
	users: userReducer
})

export default configureStore({ reducer })
