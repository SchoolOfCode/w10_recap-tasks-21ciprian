import React, {useState} from 'react'
import articles from '../../libs/articles'
import Post from '../Post'

function Posts() {
	const [posts, setPosts] = useState(articles)
	console.log(posts)
	return (
		<section>
			Posts
			{posts.map(post => {
				return <Post key={post.id} post={post} />
			})}
		</section>
	)
}

export default Posts
