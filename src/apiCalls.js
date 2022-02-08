export const orderPepperoni = (user, accessToken) => {
  return fetch(`https://dev-3m7cus37.us.auth0.com/api/v2/users/${user}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user_metadata: { pizza: 'pepperoni' },
    }),
  }).then(alert('Your pepperoni pizza is on its way!'));
};

export const orderCheese = (user, accessToken) => {
  return fetch(`https://dev-3m7cus37.us.auth0.com/api/v2/users/${user}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user_metadata: { pizza: 'cheese' },
    }),
  }).then(alert('Your cheese pizza is on its way!'));
};

export const orderSausage = (user, accessToken) => {
  return fetch(`https://dev-3m7cus37.us.auth0.com/api/v2/users/${user}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user_metadata: { pizza: 'sausage' },
    }),
  }).then(alert('Your sausage pizza is on its way!'));
};

export const orderVegetarian = (user, accessToken) => {
  return fetch(`https://dev-3m7cus37.us.auth0.com/api/v2/users/${user}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user_metadata: { pizza: 'vegetarian' },
    }),
  }).then(alert('Your vegetarian pizza is on its way!'));
};
