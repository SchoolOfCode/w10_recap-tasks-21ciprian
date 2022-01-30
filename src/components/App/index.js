import articles from '../../libs/articles'
import Header from '../Header'
import Posts from '../Posts'
import './App.css'

function App() {
	return (
		<main className='App'>
			<Header />
			<Posts />
			{articles.map(article => {
				return (
					<article key={article.id} className='post'>
						<h2>{article.title}</h2>
						{article.paragraphs.map(paragraph => (
							<p key={paragraph.id}>{paragraph.text}</p>
						))}
						<button className='like-button'>Like 👍</button>
						<section className='comment-section'>
							{article.comments.map(comment => {
								return (
									<div key={comment.id} className='comment'>
										<h4>{comment.name} says:</h4>
										<p>{comment.text}</p>
									</div>
								)
							})}
						</section>
					</article>
				)
			})}
		</main>
	)
}

export default App
