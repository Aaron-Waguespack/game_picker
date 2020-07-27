import React from 'react';
import {Card, Image, Col} from 'react-bootstrap';


function Game(props) {
    console.log(props.game.name)
    console.log(props.game.header_image)
    console.log(props.game.short_description)
    return(
        <Col xs={12} sm={6} md={4} className="game-wrapper">
        <Card className="gameCard">
            <Card.Body className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
                <Image src={props.game.header_image} className="header_image"/>
                <Card.Title className="card">{props.game.name}</Card.Title>
                <Card.Text className="card">{props.game.short_description}</Card.Text>
            </Card.Body>
        </Card>
        </Col>
    )
}

export default Game;