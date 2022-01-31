import Button from '@mui/material/Button'
import React from 'react'
import css from './Button.module.css'

function ButtonComponent({text, handleClick}) {
	return (
		<Button
			variant='contained'
			size='xs'
			color='success'
			className={css.button}
			onClick={handleClick}>
			{text}
		</Button>
	)
}

export default ButtonComponent
