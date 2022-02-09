import SnackbarAlert from './snackbarAlert'

const Layout = ({children}) => {
	return (
		<>
			<SnackbarAlert />

			{children}
		</>
	)
}
export default Layout
