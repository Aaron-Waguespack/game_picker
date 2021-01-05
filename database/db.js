const mongoose = require('mongoose');


module.exports = mongoose
  .connect(process.env.databaseURL, {
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