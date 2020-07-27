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

    render() {
      return(
	<div className="main">
    <div className="title"> Shall we play a game?</div>
      <form className="gameform">
        	<div className="formTitle"> Download Steam Games</div>
          <div> Steam Id:</div>
          <input type="text"/>
          <div>Steam API Key</div>
          <input type="password"/>
          <button>Submit</button>
      </form>
		<GameList games={this.state.games}/>
	  <GameSelector/>
	</div>
  )}
  }

  export default App;
