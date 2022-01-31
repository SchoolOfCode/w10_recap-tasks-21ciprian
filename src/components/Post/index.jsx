import React from 'react'
import Button from '../Button'
import Comments from '../Comments'
import css from './Post.module.css'

function Post({post}) {
	return (
		<article className={css.article}>
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
