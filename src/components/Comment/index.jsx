import React from 'react'

function Comment({comment}) {
	return (
		<React.Fragment>
			<h4>{comment.name}</h4>
			<p>{comment.text}</p>
		</React.Fragment>
	)
}

export default Comment
