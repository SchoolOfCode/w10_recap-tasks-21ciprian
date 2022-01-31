import Button from '@mui/material/Button'
import React from 'react'
import css from './Button.module.css'
function ButtonComponent({text}) {
	return (
		<Button
			variant='contained'
			size='xs'
			color='success'
			className={css.button}>
			{text}
		</Button>
	)
}

export default ButtonComponent
