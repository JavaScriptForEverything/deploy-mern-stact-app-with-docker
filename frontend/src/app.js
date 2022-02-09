import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getUsers } from './store/userReducer'

import Layout from './layout'
import List from './components/home/list'
import AddUser from './components/home/addUser'
import ShowUsers from './components/home/showUsers'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'


const App = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getUsers())
	}, [dispatch])


	return (
		<Layout>

			<Typography variant='h6' align='center' paragraph sx={{textTransform: 'uppercase', textDecoration: 'underline'}}>
				Deploy MERN Stack App with Docker
			</Typography>

			<List />

			<Box sx={{my: 3 }}>
				<AddUser />
			</Box>

			<ShowUsers />
		</Layout>
	)
}

export default App
