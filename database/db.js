const mongoose = require('mongoose');
const password = require('./data.js');

module.exports = mongoose
  .connect(ENV['databaseURL'], {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => {
    console.log('Successfully connected to  the database');
  })
  .catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
  });