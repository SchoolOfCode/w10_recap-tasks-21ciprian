import React from 'react'
import Comment from '../Comment'
import css from './Comments.module.css'

function Comments({comments}) {
	return (
		<section className={css.comments}>
			{comments.map(comment => {
				return <Comment key={comment.id} comment={comment} />
			})}
		</section>
	)
}

export default Comments
