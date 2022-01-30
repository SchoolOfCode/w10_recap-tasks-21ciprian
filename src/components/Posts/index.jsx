import React, {useState} from 'react'
import articles from '../../libs/articles'
import Post from '../Post'

function Posts() {
	const [posts, setPosts] = useState(articles)
	return (
		<section>
			Posts
			<Post />
		</section>
	)
}

export default Posts
