const mongoose = require('mongoose');

module.exports = mongoose
  .connect('mongodb+srv://AaronWaguespack:ADPadp1!@gamepicker.1d4hk.mongodb.net/test', {
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