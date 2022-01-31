// import {useAuth0} from '@auth0/auth0-react'
import React from 'react'
import articles from '../../libs/articles'
import Post from '../Post'
import css from './Posts.module.css'

function Posts() {
	console.log('articles:', articles)

	// const {isAuthenticated, isLoading} = useAuth0()
	// if (isLoading) {
	// 	return <div>Loading ...</div>
	// }
	return (
		<main className={css.main}>
			{articles.map(post => {
				return <Post key={post.id} post={post} />
			})}
		</main>
	)
}

export default Posts
