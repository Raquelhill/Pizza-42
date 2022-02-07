import React from 'react';
import './LoginButton.css';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <>
      {!isAuthenticated && (
        <button className="login-btn" onClick={() => loginWithRedirect()}>
          Log In
        </button>
      )}
    </>
  );
};

export default LoginButton;
