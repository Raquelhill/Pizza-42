import './App.css';
import Header from '../Header/Header';
import LandingPage from '../LandingPage/LandingPage';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';
import LoginButton from '../LoginButton/LoginButton';
import LogoutButton from '../LogoutButton/LogoutButton';

function App() {
  return (
    <div className="App">
      <Header />
      <LoginButton />
      <LogoutButton />
      <Profile />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
