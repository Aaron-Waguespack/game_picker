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



app.get('/testroute/:key/:id', (req, res, next) => {
  axios.get(`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?format=json&key=${req.params.key}&steamid=${req.params.id}`)
    .then((steamresult) => {
      games = steamresult.data.response.games
      console.log('Games',games)
        games.map((game)=>{
         let newGame = new GamesDB({
          appid: game.appid,
          name:"" ,
          header_image: "",
          short_description: "",
        })
        console.log("newGame",newGame)
        newGame.save()
    })
})
  .catch((err) => console.log(err))
})


app.get('/games', controllers.getGames);
app.post('/games', controllers.addGames);


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = app;
