const { fetchMyIP, fetchCoordsByIP } = require('./iss');
// fetchMyIP((err,ip) => {
//   if (err) {
//     console.log('There was an error:\n', err);
//     return;
//   }
//   console.log(ip);
// });

fetchCoordsByIP('107.181.189.81', (err,data) => {
  if (err) throw err;
  console.log(data);
});