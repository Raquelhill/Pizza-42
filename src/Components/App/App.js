import './App.css';
// import LoginForm from '../LoginForm/LoginForm';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import LoginButton from '../LoginButton/LoginButton';
import LogoutButton from '../LogoutButton/LogoutButton';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <LoginForm /> */}
      <LoginButton />
      <LogoutButton />
      <Footer />
    </div>
  );
}

export default App;
