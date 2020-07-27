import React from 'react';
import {Col} from 'react-bootstrap';

function GameSelector(props){

    return (
        <Col xs={12} sm={6} md={4} className="gameSelector">
        <form>
            <div>
              <div className="genre">
            <input type="checkbox" id="action"></input>
            <label for="action">Action</label>
            </div>
            <div className="genre">
            <input type="checkbox" id="adventure"></input>
            <label for="adventure">Adventure</label>
            </div>
            <div className="genre">
            <input type="checkbox" id="casual"></input>
            <label for="casual">Casual</label>
            </div>
            <div className="genre">
            <input type="checkbox" id="indie"></input>
            <label for="indie">Indie</label>
            </div>
             <div className="genre">
            <input type="checkbox" id="mmo"></input>
            <label for="mmo">MMO</label>
            </div>
            <div className="genre">
            <input type="checkbox" id="racing"></input>
            <label for="racing">Racing</label>
            </div>
            <div className="genre">
            <input type="checkbox" id="rpg"></input>
            <label for="rpg">RPG</label>
            </div>
            <div className="genre">
            <input type="checkbox" id="simulation"></input>
            <label for="simulation">Simulation</label>
            </div>
            <div className="genre">
            <input type="checkbox" id="sports"></input>
            <label for="sports">Sports</label>
            </div>
            <div className="genre">
            <input type="checkbox" id="strategy"></input>
            <label for="strategy">Strategy</label>
            </div>
            <div className="genre">
            <input type="checkbox" id="vr"></input>
            <label for="vr">VR</label>
            </div>
            </div>
            <button className="pickButton">Pick Game</button>
        </form>
        </Col>
    )
}

export default GameSelector;