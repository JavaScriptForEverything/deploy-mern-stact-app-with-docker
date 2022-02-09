import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'


const listItems = [
	'React',
	'Redux',
	'Material-UI',
	'mongoose',
	'Docker'
]

const ListComponent = () => {
	return (
		<Breadcrumbs sx={{
			display: 'flex',
			justifyContent: 'center'
		}}>
			{listItems.map((list, key) => <Link key={key}>{list}</Link>)}
		</Breadcrumbs>
	)
}
export default ListComponent
