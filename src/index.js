import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App/App';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <Auth0Provider
    domain="dev-3m7cus37.us.auth0.com"
    clientId="eJPH4Gye0ZRi0VEWBqrSyjghHj8oz3Jd"
    redirectUri={window.location.origin}
    audience="https://dev-3m7cus37.us.auth0.com/api/v2/"
    scope="read:current_user update:current_user_metadata"
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
