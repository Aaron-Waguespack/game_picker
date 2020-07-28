const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const GamesDB = require('../database/schema.js');
const controllers = require('../database/controllers.js');
const morgan = require('morgan') //
const axios = require('axios') //

const app = express();
const PORT = 3000;

app.use(cors());
app.use(morgan('dev')) //
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../public'));

app.get('/testroute/', (req, res, next) => {
  axios.get('http://store.steampowered.com/api/appdetails/?appids=39550')
    .then((steamresult) => {
      console.log('we apid')
      console.log(steamresult.status)
      console.log(steamresult.data['39550'].data.name) //number is id

      // res.send(data)
    })
    .catch((err) => console.log(err))


})

app.get('/games', controllers.getGames);
app.post('/games', controllers.addGames);


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = app;
