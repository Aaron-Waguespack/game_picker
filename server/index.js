const express = require('express');
const bodyParser = require('body-parser');
const GameDB = require('../database/schema.js');
const controllers = require('../database/controllers.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../public'));

app.get('/games', controllers.getGames);
app.post('/games', controllers.addGames);


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = app;
