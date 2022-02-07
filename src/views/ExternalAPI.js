import React, { useState } from 'react';
import { Button, Alert, Card, Row, Col, CardImg, CardBody } from 'reactstrap';
import Highlight from '../components/Highlight';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { getConfig } from '../config';
import Loading from '../components/Loading';
import pizzaData from '../utils/pizzaData';
import './ExternalApi.css';

export const ExternalApiComponent = () => {
  const { apiOrigin = 'http://localhost:3001', audience } = getConfig();

  console.log('API ORIGIN:', apiOrigin);

  const [state, setState] = useState({
    showResult: false,
    apiMessage: '',
    error: null,
  });

  const {
    getAccessTokenSilently,
    loginWithPopup,
    getAccessTokenWithPopup,
    user,
  } = useAuth0();

  const handleConsent = async () => {
    try {
      await getAccessTokenWithPopup();
      setState({
        ...state,
        error: null,
      });
    } catch (error) {
      setState({
        ...state,
        error: error.error,
      });
    }

    await callApi();
  };

  const handleLoginAgain = async () => {
    try {
      await loginWithPopup();
      setState({
        ...state,
        error: null,
      });
    } catch (error) {
      setState({
        ...state,
        error: error.error,
      });
    }

    await callApi();
  };

  const callApi = async (pizzaName) => {
    try {
      const token = await getAccessTokenSilently();
      //Function may not be working correctly.  Look into the token.
      //Then get rid of userId hardcoding
      //

      const response = await fetch(
        'https://dev-3m7cus37.us.auth0.com/api/v2/users/auth0%7C61f9863eeb269a0068aa4596',
        {
          method: 'PATCH',
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImNOekZMei0waDVDZEttUU5WbzAydiJ9.eyJpc3MiOiJodHRwczovL2Rldi0zbTdjdXMzNy51cy5hdXRoMC5jb20vIiwic3ViIjoicjFvY2tVdzhTWDBqekRlOU1sM1l1cnQ3b3Q5ZTNUdWhAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vZGV2LTNtN2N1czM3LnVzLmF1dGgwLmNvbS9hcGkvdjIvIiwiaWF0IjoxNjQ0MTgzODE3LCJleHAiOjE2NDQyNzAyMTcsImF6cCI6InIxb2NrVXc4U1gwanpEZTlNbDNZdXJ0N290OWUzVHVoIiwic2NvcGUiOiJyZWFkOmNsaWVudF9ncmFudHMgY3JlYXRlOmNsaWVudF9ncmFudHMgZGVsZXRlOmNsaWVudF9ncmFudHMgdXBkYXRlOmNsaWVudF9ncmFudHMgcmVhZDp1c2VycyB1cGRhdGU6dXNlcnMgZGVsZXRlOnVzZXJzIGNyZWF0ZTp1c2VycyByZWFkOnVzZXJzX2FwcF9tZXRhZGF0YSB1cGRhdGU6dXNlcnNfYXBwX21ldGFkYXRhIGRlbGV0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgY3JlYXRlOnVzZXJzX2FwcF9tZXRhZGF0YSByZWFkOnVzZXJfY3VzdG9tX2Jsb2NrcyBjcmVhdGU6dXNlcl9jdXN0b21fYmxvY2tzIGRlbGV0ZTp1c2VyX2N1c3RvbV9ibG9ja3MgY3JlYXRlOnVzZXJfdGlja2V0cyByZWFkOmNsaWVudHMgdXBkYXRlOmNsaWVudHMgZGVsZXRlOmNsaWVudHMgY3JlYXRlOmNsaWVudHMgcmVhZDpjbGllbnRfa2V5cyB1cGRhdGU6Y2xpZW50X2tleXMgZGVsZXRlOmNsaWVudF9rZXlzIGNyZWF0ZTpjbGllbnRfa2V5cyByZWFkOmNvbm5lY3Rpb25zIHVwZGF0ZTpjb25uZWN0aW9ucyBkZWxldGU6Y29ubmVjdGlvbnMgY3JlYXRlOmNvbm5lY3Rpb25zIHJlYWQ6cmVzb3VyY2Vfc2VydmVycyB1cGRhdGU6cmVzb3VyY2Vfc2VydmVycyBkZWxldGU6cmVzb3VyY2Vfc2VydmVycyBjcmVhdGU6cmVzb3VyY2Vfc2VydmVycyByZWFkOmRldmljZV9jcmVkZW50aWFscyB1cGRhdGU6ZGV2aWNlX2NyZWRlbnRpYWxzIGRlbGV0ZTpkZXZpY2VfY3JlZGVudGlhbHMgY3JlYXRlOmRldmljZV9jcmVkZW50aWFscyByZWFkOnJ1bGVzIHVwZGF0ZTpydWxlcyBkZWxldGU6cnVsZXMgY3JlYXRlOnJ1bGVzIHJlYWQ6cnVsZXNfY29uZmlncyB1cGRhdGU6cnVsZXNfY29uZmlncyBkZWxldGU6cnVsZXNfY29uZmlncyByZWFkOmhvb2tzIHVwZGF0ZTpob29rcyBkZWxldGU6aG9va3MgY3JlYXRlOmhvb2tzIHJlYWQ6YWN0aW9ucyB1cGRhdGU6YWN0aW9ucyBkZWxldGU6YWN0aW9ucyBjcmVhdGU6YWN0aW9ucyByZWFkOmVtYWlsX3Byb3ZpZGVyIHVwZGF0ZTplbWFpbF9wcm92aWRlciBkZWxldGU6ZW1haWxfcHJvdmlkZXIgY3JlYXRlOmVtYWlsX3Byb3ZpZGVyIGJsYWNrbGlzdDp0b2tlbnMgcmVhZDpzdGF0cyByZWFkOmluc2lnaHRzIHJlYWQ6dGVuYW50X3NldHRpbmdzIHVwZGF0ZTp0ZW5hbnRfc2V0dGluZ3MgcmVhZDpsb2dzIHJlYWQ6bG9nc191c2VycyByZWFkOnNoaWVsZHMgY3JlYXRlOnNoaWVsZHMgdXBkYXRlOnNoaWVsZHMgZGVsZXRlOnNoaWVsZHMgcmVhZDphbm9tYWx5X2Jsb2NrcyBkZWxldGU6YW5vbWFseV9ibG9ja3MgdXBkYXRlOnRyaWdnZXJzIHJlYWQ6dHJpZ2dlcnMgcmVhZDpncmFudHMgZGVsZXRlOmdyYW50cyByZWFkOmd1YXJkaWFuX2ZhY3RvcnMgdXBkYXRlOmd1YXJkaWFuX2ZhY3RvcnMgcmVhZDpndWFyZGlhbl9lbnJvbGxtZW50cyBkZWxldGU6Z3VhcmRpYW5fZW5yb2xsbWVudHMgY3JlYXRlOmd1YXJkaWFuX2Vucm9sbG1lbnRfdGlja2V0cyByZWFkOnVzZXJfaWRwX3Rva2VucyBjcmVhdGU6cGFzc3dvcmRzX2NoZWNraW5nX2pvYiBkZWxldGU6cGFzc3dvcmRzX2NoZWNraW5nX2pvYiByZWFkOmN1c3RvbV9kb21haW5zIGRlbGV0ZTpjdXN0b21fZG9tYWlucyBjcmVhdGU6Y3VzdG9tX2RvbWFpbnMgdXBkYXRlOmN1c3RvbV9kb21haW5zIHJlYWQ6ZW1haWxfdGVtcGxhdGVzIGNyZWF0ZTplbWFpbF90ZW1wbGF0ZXMgdXBkYXRlOmVtYWlsX3RlbXBsYXRlcyByZWFkOm1mYV9wb2xpY2llcyB1cGRhdGU6bWZhX3BvbGljaWVzIHJlYWQ6cm9sZXMgY3JlYXRlOnJvbGVzIGRlbGV0ZTpyb2xlcyB1cGRhdGU6cm9sZXMgcmVhZDpwcm9tcHRzIHVwZGF0ZTpwcm9tcHRzIHJlYWQ6YnJhbmRpbmcgdXBkYXRlOmJyYW5kaW5nIGRlbGV0ZTpicmFuZGluZyByZWFkOmxvZ19zdHJlYW1zIGNyZWF0ZTpsb2dfc3RyZWFtcyBkZWxldGU6bG9nX3N0cmVhbXMgdXBkYXRlOmxvZ19zdHJlYW1zIGNyZWF0ZTpzaWduaW5nX2tleXMgcmVhZDpzaWduaW5nX2tleXMgdXBkYXRlOnNpZ25pbmdfa2V5cyByZWFkOmxpbWl0cyB1cGRhdGU6bGltaXRzIGNyZWF0ZTpyb2xlX21lbWJlcnMgcmVhZDpyb2xlX21lbWJlcnMgZGVsZXRlOnJvbGVfbWVtYmVycyByZWFkOmVudGl0bGVtZW50cyByZWFkOmF0dGFja19wcm90ZWN0aW9uIHVwZGF0ZTphdHRhY2tfcHJvdGVjdGlvbiByZWFkOm9yZ2FuaXphdGlvbnMgdXBkYXRlOm9yZ2FuaXphdGlvbnMgY3JlYXRlOm9yZ2FuaXphdGlvbnMgZGVsZXRlOm9yZ2FuaXphdGlvbnMgY3JlYXRlOm9yZ2FuaXphdGlvbl9tZW1iZXJzIHJlYWQ6b3JnYW5pemF0aW9uX21lbWJlcnMgZGVsZXRlOm9yZ2FuaXphdGlvbl9tZW1iZXJzIGNyZWF0ZTpvcmdhbml6YXRpb25fY29ubmVjdGlvbnMgcmVhZDpvcmdhbml6YXRpb25fY29ubmVjdGlvbnMgdXBkYXRlOm9yZ2FuaXphdGlvbl9jb25uZWN0aW9ucyBkZWxldGU6b3JnYW5pemF0aW9uX2Nvbm5lY3Rpb25zIGNyZWF0ZTpvcmdhbml6YXRpb25fbWVtYmVyX3JvbGVzIHJlYWQ6b3JnYW5pemF0aW9uX21lbWJlcl9yb2xlcyBkZWxldGU6b3JnYW5pemF0aW9uX21lbWJlcl9yb2xlcyBjcmVhdGU6b3JnYW5pemF0aW9uX2ludml0YXRpb25zIHJlYWQ6b3JnYW5pemF0aW9uX2ludml0YXRpb25zIGRlbGV0ZTpvcmdhbml6YXRpb25faW52aXRhdGlvbnMiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.aOWr2zvvQbBavCDqOnJWBStxhrH1B6VX-Lxs4CvYd7ieuet5M7tgtn_67S600QyoWJ_L2MfMKdPDPZ7iFm5yFa8ZgarX2bJQGqOc31ztLoOxKzNAjmDMUZkXMBripSdIbhGPjERQruWXnY7WVLk8MBC6uGgC7xo5q3GtLwE_x_s4umgdOo0y9pjU8Jfc9JTKPItI8wTSPnWJthEYvk2uV4Qk19IizWA7jZz2-e7bC81Chhxr0hD8z-slCy3Uc006WZayeE03FcBYXgB8RblYc4mPbZjsDLUC_xNqglwdDabbV6JPeFZn9PCHvHEUInAPK7BPxFNFYVneDkmD9CbMJg',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user_metadata: { pizzaType: 'pepperoni' },
          }),
        }
      );

      const responseData = await response.json();

      setState({
        ...state,
        showResult: true,
        apiMessage: responseData,
      });
    } catch (error) {
      console.log('error:', error);
      setState({
        ...state,
        showResult: true,
        error: error,
      });
    }
  };

  const handle = (e, fn) => {
    e.preventDefault();
    fn();
  };

  const _buildPreviouslyOrderedItems = () => {
    let pizzaItems = [];

    user['https://pizza42.com/orderHistory'].forEach((element) => {
      let pizza = pizzaData.find((pizza) => pizza.name === element);
      if (pizzaItems.indexOf(pizza) > -1) {
        return;
      }
      pizzaItems.push(pizza);
    });

    return pizzaItems.map((pizza) => (
      <Col sm="4" key={pizza.id} className="mb-3">
        <Card>
          <CardImg top height="300px" src={pizza.img} alt="Card image cap" />
          <CardBody>
            <h4>{pizza.name}</h4>
            <Button
              color="primary"
              className="mt-5"
              onClick={() => callApi(pizza.name)}
              disabled={!user.email_verified}
            >
              ORDER AGAIN!
            </Button>
          </CardBody>
        </Card>
      </Col>
    ));
  };

  const _buildPizzaItems = () => {
    return pizzaData.map((pizza) => (
      <Col sm="4" key={pizza.id} className="mb-3">
        <Card>
          <CardImg top height="300px" src={pizza.img} alt="Card image cap" />
          <CardBody>
            <h4>{pizza.name}</h4>

            <Button
              color="primary"
              className="mt-5"
              onClick={() => callApi(pizza.name)}
              disabled={!user.email_verified}
            >
              <img
                src="https://cdn.unos.com/images/icons/pizza-slice32.png"
                alt="Order Online"
                title="Order"
              ></img>
              ORDER NOW!
            </Button>
          </CardBody>
        </Card>
      </Col>
    ));
  };

  return (
    <>
      <div className="mb-5">
        {state.error === 'consent_required' && (
          <Alert color="warning">
            You need to{' '}
            <a
              href="#/"
              class="alert-link"
              onClick={(e) => handle(e, handleConsent)}
            >
              consent to get access to users api
            </a>
          </Alert>
        )}

        {state.error === 'login_required' && (
          <Alert color="warning">
            You need to{' '}
            <a
              href="#/"
              class="alert-link"
              onClick={(e) => handle(e, handleLoginAgain)}
            >
              log in again
            </a>
          </Alert>
        )}

        {!user.email_verified && (
          <Alert color="warning">
            <p>
              You can't order pizza yet because your email address is not
              verified. Please click on the link in the verification email that
              was sent to your email address.
            </p>
          </Alert>
        )}

        {user['https://pizza42.com/orderHistory'] &&
          user['https://pizza42.com/orderHistory'].length > 0 && (
            <Row>
              <Col sm="12">
                <h3>Your previous orders</h3>
              </Col>

              {_buildPreviouslyOrderedItems()}
            </Row>
          )}

        <Row>
          <Col sm="12">
            <h3>MENU</h3>
          </Col>
          {_buildPizzaItems()}
        </Row>
      </div>

      <div className="result-block-container">
        {state.showResult && (
          <div className="result-block" data-testid="api-result">
            <h6 className="muted">Result</h6>
            <Highlight>
              <span>{JSON.stringify(state.apiMessage, null, 2)}</span>
            </Highlight>
          </div>
        )}
      </div>
    </>
  );
};

export default withAuthenticationRequired(ExternalApiComponent, {
  onRedirecting: () => <Loading />,
});
