import './App.css';
import Header from '../Header/Header';
import LandingPage from '../LandingPage/LandingPage';
import Footer from '../Footer/Footer';
import OrderCardContainer from '../OrderContainer/OrderCardContainer';
import Profile from '../Profile/Profile';
import LoginButton from '../LoginButton/LoginButton';
import LogoutButton from '../LogoutButton/LogoutButton';

function App() {
  return (
    <div className="App">
      <Header />
      <LogoutButton />
      <LoginButton />
      <LandingPage />
      <OrderCardContainer />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
