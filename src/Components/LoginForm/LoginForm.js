import './LoginForm.css';

const LoginForm = () => {
  return (
    <div className="sign-in-page">
      <form className="sign-in-form">
        <h2 className="sign-in-title">Sign In To Your Account</h2>
        <div className="input-containers">
          <input className="user-name-input" type="text" placeholder="Email" />
          <input
            className="password-input"
            type="current-password"
            placeholder="Password"
          />
        </div>
        <button className="sign-in-btn">Sign In</button>
      </form>
    </div>
  );
};

export default LoginForm;
