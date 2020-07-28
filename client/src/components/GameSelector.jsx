import React from 'react';
import {Col} from 'react-bootstrap';

function GameSelector(props){

    return (
        <Col xs={12} sm={6} md={4} className="gameSelector">
        <form>
            <div>
              <div className="genre">
            <input type="checkbox" id="action"></input>
            <label htmlFor="action">Action</label>
            </div>
            <div className="genre">
            <input type="checkbox" id="adventure"></input>
            <label htmlFor="adventure">Adventure</label>
            </div>
            <div className="genre">
            <input type="checkbox" id="casual"></input>
            <label htmlFor="casual">Casual</label>
            </div>
            <div className="genre">
            <input type="checkbox" id="indie"></input>
            <label htmlFor="indie">Indie</label>
            </div>
             <div className="genre">
            <input type="checkbox" id="mmo"></input>
            <label htmlFor="mmo">MMO</label>
            </div>
            <div className="genre">
            <input type="checkbox" id="racing"></input>
            <label htmlFor="racing">Racing</label>
            </div>
            <div className="genre">
            <input type="checkbox" id="rpg"></input>
            <label htmlFor="rpg">RPG</label>
            </div>
            <div className="genre">
            <input type="checkbox" id="simulation"></input>
            <label htmlFor="simulation">Simulation</label>
            </div>
            <div className="genre">
            <input type="checkbox" id="sports"></input>
            <label htmlFor="sports">Sports</label>
            </div>
            <div className="genre">
            <input type="checkbox" id="strategy"></input>
            <label htmlFor="strategy">Strategy</label>
            </div>
            <div className="genre">
            <input type="checkbox" id="vr"></input>
            <label htmlFor="vr">VR</label>
            </div>
            </div>
            <button className="pickButton">Pick Game</button>
        </form>
        </Col>
    )
}

export default GameSelector;