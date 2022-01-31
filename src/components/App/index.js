import {useAuth0} from '@auth0/auth0-react'
import Button from '../Button'
import Header from '../Header'
import Posts from '../Posts'
import css from './App.module.css'

const logInStyle = {
	animation: 'none',
	backgroundColor: 'blue',
	width: '30%',
	position: 'absolute',
	top: '50%',
	marginTop: '30%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	zIndex: 20,
}
const logOutStyle = {
	animation: 'none',
	backgroundColor: 'blue',
	width: '30%',
	zIndex: 20,
	position: 'absolute',
	bottom: '1%',
	left: '50%',
	transform: 'translateX(-50%)',
}
function App() {
	const {logout, loginWithRedirect, isAuthenticated} = useAuth0()
	if (!isAuthenticated) {
		return (
			<section className={css.app}>
				<Header />
				<div className={css.login}>
					<h3>You need to be logged in to see the awesome pigeon posts</h3>
					<Button
						text='Log In'
						style={logInStyle}
						handleClick={() => loginWithRedirect()}
					/>
				</div>
			</section>
		)
	}
	return (
		<section className={css.app}>
			<Header />
			<Posts />
			<Button text='Log Out' style={logOutStyle} handleClick={() => logout()} />
		</section>
	)
}

export default App
