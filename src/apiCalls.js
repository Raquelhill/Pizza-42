var request = require('request');

var options = {
  method: 'POST',
  url: 'https://dev-3m7cus37.us.auth0.com/oauth/token',
  headers: { 'content-type': 'application/json' },
  body: '{"client_id":"1QsLzixI8fhVhYmEGvDdEwgKOwJFUySq","client_secret":"ofeyT35NKsrTh6HNAz8MqSwUNJ8SxZ3Wizip9zb7ymHAKSnCzpcEYMlqeSJCFgtV","audience":"https://pizza42-api","grant_type":"client_credentials"}',
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://pizza42-api',
  headers: { authorization: 'Bearer TOKEN' },
};

axios(options)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
