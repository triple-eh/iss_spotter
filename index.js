const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');
// fetchMyIP((err,ip) => {
//   if (err) {
//     console.log('There was an error:\n', err);
//     return;
//   }
//   console.log(ip);
// });

// fetchCoordsByIP('107.181.189.81', (err,data) => {
//   if (err) return console.log(err);
//   console.log(data);
// // });
// const coordinates = {
//   latitude: '49.28330',
//   longitude: '-123.13980'
// };
// fetchISSFlyOverTimes(coordinates, (err,data) => {
//   if (err) return console.log(err);
//   console.log(data);
// });