const req = require('request');
/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */

const fetchMyIP = (cb) => {
  // use request to fetch IP address from JSON API
  req('https://api.ipify.org?format=json',(err,res,body) => {
    if (err) {
      cb(err,null);
      return;
    }
    if (res.statusCode !== 200) {
      const msg = 'Server responded with code' + res.statusCode;
      cb(Error(msg), null);
      return;
    }
    try {
      const ip = JSON.parse(body).ip;
      cb(null, ip);
    } catch (err) {
      cb(err, null);
    }
    return;
  });
};

const fetchCoordsByIP = (ip, cb) => {
  req('https://ipvigilante.com/' + ip, (err, res, body) => {
    if (err) return cb(err,null);
    if (res.statusCode !== 200) return cb(Error('Server\'s status code is ' + res.statusCode));
    try {
      const { latitude, longitude } = JSON.parse(body).data;
      cb(null, { latitude, longitude });
    } catch (err) {
      cb(err, null);
    }
    return;
  });
};

const fetchISSFlyOverTimes = (coordinates, cb) => {
  req(`http://api.open-notify.org/iss-pass.json?lat=${coordinates.latitude}&lon=${coordinates.longitude}`, (err, res, body) => {
    if (err) return cb(err,null);
    if (res.statusCode !== 200) return cb(Error('Server\'s status code is ' + res.statusCode));
    try {
      cb(null, JSON.parse(body).response);
    } catch (err) {
      cb(err, null);
    }
    return;
  });
};

module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes };
