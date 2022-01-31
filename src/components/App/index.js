import Button from '../Button'
import Header from '../Header'
import Posts from '../Posts'
import css from './App.module.css'

function App() {
	return (
		<section className={css.app}>
			<Header />
			<Button text='Log In' />
			<Button text='Log Out' />
			<button>test</button>
			<Posts />
		</section>
	)
}

export default App
