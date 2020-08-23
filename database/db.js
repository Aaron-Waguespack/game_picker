const mongoose = require('mongoose');

module.exports = mongoose
  .connect('mongodb://heroku_nqqnrdk0:38b94pqjev0vrrb1nndmhma60i@ds127802.mlab.com:27802/heroku_nqqnrdk0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => {
    console.log('Successfully connected to the database');
  })
  .catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
  });