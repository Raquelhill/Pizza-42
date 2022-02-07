import React from 'react';
import './LogoutButton.css';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
  const { isAuthenticated, logout } = useAuth0();

  return (
    <>
      {isAuthenticated && (
        <button className="login-btn" onClick={() => logout()}>
          Log Out
        </button>
      )}
    </>
  );
};

export default LogoutButton;
