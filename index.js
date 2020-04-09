const { nextISSTimesForMyLocation } = require('./iss');

const printPassTimes = (passTimes) => {
  passTimes.forEach((pass) => {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass is at ${datetime} for ${duration} seconds`);
  });
};

nextISSTimesForMyLocation((err, passTimes) => {
  if (err) return console.log(err);
  printPassTimes(passTimes);
});