import './App.css';
import Header from '../Header/Header';
import LandingPage from '../LandingPage/LandingPage';
import Footer from '../Footer/Footer';
import OrderCardContainer from '../OrderCardContainer/OrderCardContainer';
import Profile from '../Profile/Profile';
import LoginButton from '../LoginButton/LoginButton';
import LogoutButton from '../LogoutButton/LogoutButton';
import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {
  orderCheese,
  orderPepperoni,
  orderSausage,
  orderVegetarian,
} from '../../apiCalls';

const App = () => {
  const { user, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = 'dev-3m7cus37.us.auth0.com';

      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: 'read:current_user',
        });

        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        console.log('TOKEN', accessToken);
        setAccessToken(accessToken);

        const { user_metadata } = await metadataResponse.json();

        setUserMetadata(user_metadata);
      } catch (e) {
        console.log(e.message);
      }
    };

    getUserMetadata();
  }, [getAccessTokenSilently, user?.sub]);
  console.log('USER', user);
  console.log('metadata', userMetadata);

  return (
    <div className="App">
      <Header />
      <LogoutButton />
      <LoginButton />
      <Profile userMetadata={userMetadata} />
      <LandingPage />
      <OrderCardContainer
        orderCheese={orderCheese}
        orderPepperoni={orderPepperoni}
        orderSausage={orderSausage}
        orderVegetarian={orderVegetarian}
        user={user}
        accessToken={accessToken}
      />
      <Footer />
    </div>
  );
};

export default App;
