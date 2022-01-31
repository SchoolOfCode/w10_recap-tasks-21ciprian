import Button from '@mui/material/Button'
import React from 'react'
function ButtonComponent({text}) {
	return (
		<Button variant='contained' size='xs' color='success'>
			{text}
		</Button>
	)
}

export default ButtonComponent
