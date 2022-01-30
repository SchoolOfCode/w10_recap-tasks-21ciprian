import React, {useState} from 'react'
import articles from '../../libs/articles'
import Comments from '../Comments'
import Post from '../Post'

function Posts() {
	const [posts, setPosts] = useState(articles)
	return (
		<section>
			Posts
			<Post />
			<Comments />
		</section>
	)
}

export default Posts
