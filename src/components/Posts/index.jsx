import React, {useState} from 'react'
import articles from '../../libs/articles'
import Post from '../Post'

function Posts() {
	const [posts, setPosts] = useState(articles)
	return (
		<main>
			{posts.map(post => {
				return <Post key={post.id} post={post} />
			})}
		</main>
	)
}

export default Posts
