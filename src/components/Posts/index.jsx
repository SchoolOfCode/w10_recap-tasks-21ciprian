import React, {useState} from 'react'
import articles from '../../libs/articles'
import Post from '../Post'
import css from './Posts.module.css'

function Posts() {
	const [posts, setPosts] = useState(articles)
	return (
		<main className={css.main}>
			{posts.map(post => {
				return <Post key={post.id} post={post} />
			})}
		</main>
	)
}

export default Posts
