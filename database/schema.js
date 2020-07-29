const mongoose = require('mongoose');
const db = require('./db.js');

const {Schema} = mongoose
const gamesSchema = new Schema({
  appid: { type: Number, index: { unique: true } },
  name: String,
  genres: String,
  header_image: String,
  short_description:String
});

const GamesDB = mongoose.model('GamesDB', gamesSchema);

module.exports = GamesDB;