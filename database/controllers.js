const GamesDB = require('./schema.js');

// exports.getGames=(steamId, steamKey)=>{
//   fetch(`http://api.steampowered.com/IPlayerService/GetOwnedGames/
//         v0001/?format=json&key=${steamKey}&steamid=${steamId}`)
//   .then(response=> response.json())
//   .then(games.map((game)=>{
//     fetch(`http://store.steampowered.com/api/appdetails/?appids=${game.appid}`)
//      let newGame = new GamesDB({
//       appid: game.appid,
//       name:"" ,
//       header_image: "",
//       short_description: "",
//     })
//     newGame.save()
//   }))
// }

//  exports.addGames = (req, res)=>{

//     newGame.save()
//     .then(data => {res.send(data)})
//   }
//  GamesDB.find()
//     .then(data => {res.send(data)});