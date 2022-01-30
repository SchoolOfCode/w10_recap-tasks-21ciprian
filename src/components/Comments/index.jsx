import React from 'react'
import Comment from '../Comment'

function Comments({comments}) {
	console.log('comments:', comments)
	return (
		<section>
			comments section
			{comments.map(comment => {
				return <Comment key={comment.id} comment={comment} />
			})}
		</section>
	)
}

export default Comments
