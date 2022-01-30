import React from 'react'
import Button from '../Button'
import Comments from '../Comments'

function Post({post}) {
	console.log('post.paragraphs:', post.paragraphs)
	return (
		<article>
			post component
			<h2>{post.title}</h2>
			{post.paragraphs.map(post => {
				return <p key={post.id}>{post.text}</p>
			})}
			<Comments comments={post.comments} />
			<Button text='Like 👍' />
		</article>
	)
}

export default Post
