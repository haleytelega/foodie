import React from 'react';
import board from '../../assets/mainPage/0.jpeg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
    return (
        <Container>
            <Row>
            <Col className="head-img">
                <img src={board} style={{ width: '100vw', height: '100vh'}} alt="cutting board" />
            </Col>
            <Col>
                <p className='board-name'> Welcome to the board </p>
            </Col>
            <Col>
                <p className="board-description"> This website is for me to store my all time favourite recipes 
                and new recipes so I won't forget how to make them. This takes away the need for pen and paper.
                </p>
            </Col>
            </Row>
        </Container>
    )
}

export default Home;