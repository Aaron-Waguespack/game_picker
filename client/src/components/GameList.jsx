import React from 'react';
import Game from './Game.jsx';

function GameList(props){
    let checked = document.querySelectorAll('input:checked');
    if (checked.length === 0) {
        return (
            <div className="gameList">
                {props.games.map((game, i)=> (
                    <Game
                        key={i}
                        game={game}
                    />
                ))}
            </div>
            )
    } else{
        return (
            <div className="gameList">
                {props.filteredGames.map((game, i)=> (
                    <Game
                        key={i}
                        game={game}
                    />
                ))}
            </div>
        )};
}

export default GameList;