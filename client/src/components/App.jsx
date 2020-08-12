import React from 'react';
import $ from 'jquery';
import GameList from './GameList.jsx'
import GameSelector from './GameSelector.jsx'

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state={
		  games:[],
		selectedGenres:[],
		filteredGames:[],
		}
		this.handleChange = this.handleChange.bind(this);
		this.gameFilter = this.gameFilter.bind(this);

	}

	gamedbFetcher(){
		fetch('http://localhost:3000/games')
		.then(response=> response.json())
		.then(data => this.setState({games:data}))
		.then(console.log("Fetched"))
		.catch( (err) => console.log("fetcher Err", err))
		}

 	allUnchecked(){
		let checked = document.querySelectorAll('input:checked');
		if (checked.length === 0) {
			this.setState({filteredGames:this.state.games});
		}}

	  componentDidMount(){
			this.gamedbFetcher()
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
				.then((data) => console.log("get games", data))
				.catch( (err) => console.log("get games", err))
				.catch( (err) => console.log("get games", err))
				}
	componentDidUpdate(prevProps, prevState) {
					if (prevState.games !== this.state.pokemons) {
						this.gamedbFetcher()
					}}

		gameFilter(){
		let gms =this.state.games;
		let selected = this.state.selectedGenres;
		let fg =   gms.filter(
							game => {
								return game.genres.some(
									genre => {
										return selected.includes(genre)})})
		return fg
		}

	handleChange(e) {
		let isChecked = e.target.checked;
		if(e.target.checked=== true){
			let temp = this.state.selectedGenres;
				temp.push(e.target.id);
				this.setState({selectedGenres:temp});
				this.setState({filteredGames:this.gameFilter()})
		}else{
			if(isChecked===false){
				let temp = this.state.selectedGenres;
				let index = temp.indexOf(e.target.id);
				if(index>-1){
					temp.splice(index,1);
				}
				this.setState({selectedGenres:temp});
			}
			this.allUnchecked();
			}
		}

    render() {
      return(
	<div className="main">
    <div className='titlebar'>
    <h1 className="title">Shall we play a game?</h1>
    </div>
      <form className="gameform" onSubmit={(event)=>{
				this.getGames(this.gameFormObj(),event)}}>
        	<div className="formTitle"> Download Steam Games</div>
          <div> Steam Id:</div>
		  <input
			id="steamId"
			type="text"
			defaultValue ="76561198032968660"
			autoComplete="on"
		  />
          <div>Steam API Key</div>
		  <input
			id="steamKey"
			type="password"
			defaultValue ="0C9BE31E8018AC860AA04406D9DF6736"
			autoComplete="on"
		  />
          <button>Submit</button>
      </form>
		<GameList
			games={this.state.games}
			filteredGames={this.state.filteredGames}
		/>
	  <GameSelector
	  handleChange={this.handleChange}/>
	</div>
  )}
  }

  export default App;
  // <form className="gameform" onSubmit={(event)=>{this.testServerFetch(this.gameFormObj(),event)}}>
