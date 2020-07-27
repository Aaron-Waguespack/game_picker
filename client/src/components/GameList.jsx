import React from 'react';
import Game from './Game.jsx';

function GameList(props){
    // console.log(props.games)
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
}

export default GameList;