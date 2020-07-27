const GameDB = require('./schema.js');

exports.getGames=(req, res)=>{
  RsvpDB.find()
    .then(data => {res.send(data)});
 }

 exports.addGames = (req, res)=>{
    let newGame = new GameDB({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      guests: req.body.guests,
    })
    newGame.save()
    .then(data => {res.send(data)})
  }
