import React from 'react'
import Comment from '../Comment'

function Comments({comments}) {
	return (
		<section>
			{comments.map(comment => {
				return <Comment key={comment.id} comment={comment} />
			})}
		</section>
	)
}

export default Comments
