const mongoose = require('mongoose');
const db = require('./db.js');

const {Schema} = mongoose
const gamesSchema = new Schema({
  appid: Number,
  name: String,
  genres: String,
  header_image: String
});

const GamesDB = mongoose.model('GamesDB', gamesSchema);

module.exports = GamesDB;