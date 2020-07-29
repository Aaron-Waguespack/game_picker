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
			short_description:""
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

    getGames(gameObj) {
      fetch(`/testroute/${gameObj.steamKey}/${gameObj.steamId}`)
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch( (err) => console.log(err))
    }

    render() {
      return(
	<div className="main">
    <div className='titlebar'>
    <h1 className="title">Shall we play a game?</h1>
    </div>
      <form className="gameform" onSubmit={(event)=>{this.getGames(this.gameFormObj(),event)}}>
        	<div className="formTitle"> Download Steam Games</div>
          <div> Steam Id:</div>
          <input id="steamId" type="text" defaultValue ="76561198032968660"/>
          <div>Steam API Key</div>
          <input id="steamKey" type="password" defaultValue ="0C9BE31E8018AC860AA04406D9DF6736"/>
          <button>Submit</button>
      </form>
		<GameList games={this.state.games}/>
	  <GameSelector/>
	</div>
  )}
  }

  export default App;
  // <form className="gameform" onSubmit={(event)=>{this.testServerFetch(this.gameFormObj(),event)}}>
