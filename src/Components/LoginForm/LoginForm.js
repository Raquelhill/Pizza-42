import './LoginForm.css';

const LoginForm = () => {
  return (
    <body className="sign-in-page">
      <form className="sign-in-form">
        <h2 className="sign-in-title">Sign In</h2>
        <div className="input-containers">
          <input
            className="user-name-input"
            type="text"
            placeholder="Username"
          />
          <input
            className="password-input"
            type="password"
            placeholder="Password"
          />
        </div>
        <button className="submit-btn">Submit</button>
      </form>
    </body>
  );
};

export default LoginForm;
