import React from 'react';
import $ from 'jquery';
import GameList from './GameList.jsx'
import GameSelector from './GameSelector.jsx'

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state={games:[
		  {
			appid: 1,
			name: "game1",
			genres: "RPG",
			header_image: "https://steamcdn-a.akamaihd.net/steam/apps/39550/header.jpg?t=1561968743",
			short_description:"SpellForce 2 - Anniversary Edition presents the award-winning SpellForce saga hits: &quot;SpellForce 2 – Shadow Wars&quot; and the add-on &quot;SpellForce 2 – Dragon Storm&quot; for a spectacular game experience!"
		  },
		  {
			appid: 2,
			name: "game2",
			genres: "RPG",
			header_image: "https://steamcdn-a.akamaihd.net/steam/apps/39550/header.jpg?t=1561968743",
			short_description:"this is short"
		  },
		  {
			appid: 3,
			name: "game2",
			genres: "RPG",
			header_image: "https://steamcdn-a.akamaihd.net/steam/apps/39550/header.jpg?t=1561968743",
			short_description:"this is short"
		  },
		  {
			appid: 1,
			name: "game1",
			genres: "RPG",
			header_image: "https://steamcdn-a.akamaihd.net/steam/apps/39550/header.jpg?t=1561968743",
			short_description:"this is short"
		  },
		  {
			appid: 2,
			name: "game2",
			genres: "RPG",
			header_image: "https://steamcdn-a.akamaihd.net/steam/apps/39550/header.jpg?t=1561968743",
			short_description:"this is short"
		  },
		  {
			appid: 3,
			name: "game2",
			genres: "RPG",
			header_image: "https://steamcdn-a.akamaihd.net/steam/apps/39550/header.jpg?t=1561968743",
			short_description:"this is short"
		  }
		]}
    }

    gameFormObj(){
      const steamId = document.getElementById('steamId').value;
      const steamKey = document.getElementById('steamKey').value;
      const gameObj={
        steamId:steamId,
        steamKey:steamKey,
      }
      return gameObj
    }

    // testFetch() {
    //   fetch('http://store.steampowered.com/api/appdetails/?appids=39550',
    //   {
    //     method: 'GET',
    //     headers: {
    //       "Access-Control-Allow-Origin": "*",
    //       "Content-Type": "application/x-www-form-urlencoded"
    //     }
    //   })
    //     .then((res) => res.json())
    //     .then((data) => console.log(data))
    //     .catch((error) => {
    //       console.log('TestFetch: ' + error.message);
    //     });
    // }

    testServerFetch() {
      fetch('/testroute/')
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch( (err) => console.log(err))
    }

    // getGames(gameObj){
    //   fetch("http://52.26.193.201:3000/qa/5",
    //    {
    //     headers:{
    //       "Content-Type": "application/x-www-form-urlencoded",
    //       // "Access-Control-Request-Headers": "access-control-allow-origin",
    //       "Host":"api.steampowered.com"
    //     }})
    //     .catch((error) => {
    //       console.log('There has been a problem with your fetch operation: 0 ' + error.name);
    //     })
      // .then(tempgame.map((game)=>{
      //    let newGame = new GamesDB({
      //     appid: game.appid,
      //     name:"" ,
      //     header_image: "",
      //     short_description: "",
      //   })
      //   console.log("newGame",newGame)
      //   newGame.save()
      // }))
    //   .then(response =>{console.log("response", response)})
    //   .catch((error) => {
    //     console.log('There has been a problem with your fetch operation: 1 ' + error.message);
    //   })
    //   .then(data => {
    //     console.log('Success:', data);
    //   })
    //   .catch((error) => {
    //     console.log('There has been a problem with your fetch operation: 2 ' + error.message);
    //   })
    // }


    render() {
      return(
	<div className="main">
    <div className='titlebar'>
    <h1 className="title">Shall we play a game?</h1>
    </div>
      <form className="gameform" onSubmit={(event)=>{event.preventDefault(); this.testServerFetch()}}>
        	<div className="formTitle"> Download Steam Games</div>
          <div> Steam Id:</div>
          <input id="steamId" type="text" defaultValue ="76561198032968660"/>
          <div>Steam API Key</div>
          <input id="steamKey" type="text" defaultValue ="0C9BE31E8018AC860AA04406D9DF6736"/>
          <button>Submit</button>
      </form>
		<GameList games={this.state.games}/>
	  <GameSelector/>
	</div>
  )}
  }

  export default App;
