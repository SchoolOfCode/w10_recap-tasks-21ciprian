// import {Auth0Provider} from '@auth0/auth0-react'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './index.css'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
)

reportWebVitals()
// <Auth0Provider
//   domain={process.env.REACT_APP_DOMAIN}
//   clientId={process.env.REACT_APP_CLIENT_ID}
//   redirectUri={window.location.origin}>
// </Auth0Provider>
