import React from 'react'
import css from './Comment.module.css'

function Comment({comment}) {
	return (
		<section className={css.comment}>
			<h4 className={css.comment__name}>{comment.name}</h4>
			<p className={css.comment__text}>{comment.text}</p>
		</section>
	)
}

export default Comment
