import React from 'react';
import {Col} from 'react-bootstrap';

function GameSelector(props){

    return (
        <Col xs={12} sm={6} md={4} className="gameSelector">
        <form>
            <div>
              <div className="genre">
            <input type="checkbox" id="Action"
                onChange ={(e) => props.handleChange(e)}></input>
            <label htmlFor="action">Action</label>
            </div>
            <div className="genre">
            <input type="checkbox" id="Adventure"
                 onChange ={(e) => props.handleChange(e)}></input>
            <label htmlFor="adventure">Adventure</label>
            </div>
            <div className="genre">
            <input type="checkbox" id="casual"
                onChange ={(e) => props.handleChange(e)}></input>
            <label htmlFor="casual">Casual</label>
            </div>
            <div className="genre">
            <input type="checkbox" id="Indie"
                onChange ={(e) => props.handleChange(e)}></input>
            <label htmlFor="indie">Indie</label>
            </div>
             <div className="genre">
                 {/* //Massively Multiplayer */}
            <input type="checkbox" id="mmo"
                onChange ={(e) => props.handleChange(e)}></input>
            <label htmlFor="mmo">MMO</label>
            </div>
            <div className="genre">
            <input type="checkbox" id="Racing"
                onChange ={(e) => props.handleChange(e)}></input>
            <label htmlFor="racing">Racing</label>
            </div>
            <div className="genre">
            <input type="checkbox" id="RPG"
                onChange ={(e) => props.handleChange(e)}></input>
            <label htmlFor="rpg">RPG</label>
            </div>
            <div className="genre">
            <input type="checkbox" id="Simulation"
                onChange ={(e) => props.handleChange(e)}></input>
            <label htmlFor="Simulation">Simulation</label>
            </div>
            <div className="genre">
            <input type="checkbox" id="Sports"
                onChange ={(e) => props.handleChange(e)}></input>
            <label htmlFor="sports">Sports</label>
            </div>
            <div className="genre">
            <input type="checkbox" id="Strategy"
                onChange ={(e) => props.handleChange(e)}></input>
            <label htmlFor="strategy">Strategy</label>
            </div>
            <div className="genre">
            <input type="checkbox" id="VR"
                onChange ={(e) => props.handleChange(e)}></input>
            <label htmlFor="vr">VR</label>
            </div>
            </div>
            <button className="pickButton">Pick Game</button>
        </form>
        </Col>
    )
}

export default GameSelector;