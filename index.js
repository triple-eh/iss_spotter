const { fetchMyIP } = require('./iss');

fetchMyIP((err,ip) => {
  if (err) {
    console.log('There was an error:\n', err);
    return;
  }
  console.log(ip);
});