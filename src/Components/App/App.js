import './App.css';
import Header from '../Header/Header';
import LandingPage from '../LandingPage/LandingPage';
import Footer from '../Footer/Footer';
import OrderCardContainer from '../OrderCardContainer/OrderCardContainer';
import Profile from '../Profile/Profile';
import LoginButton from '../LoginButton/LoginButton';
import LogoutButton from '../LogoutButton/LogoutButton';
import { getData } from '../../apiCalls';

const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://pizza42-api',
//   headers: { authorization: 'Bearer TOKEN' },
// };

// axios(options)
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

function App() {
  return (
    <div className="App">
      <Header />
      <LogoutButton />
      <LoginButton />
      <LandingPage />
      <OrderCardContainer getData={getData} />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
