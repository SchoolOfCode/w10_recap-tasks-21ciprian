import Header from '../Header'
import Posts from '../Posts'
import css from './App.module.css'

function App() {
	return (
		<section className={css.app}>
			<Header />
			<Posts />
		</section>
	)
}

export default App
