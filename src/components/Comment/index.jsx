import React from 'react'

function Comment({comment}) {
	return (
		<section>
			Comment component
			<h4>{comment.name}</h4>
			<p>{comment.text}</p>
		</section>
	)
}

export default Comment
