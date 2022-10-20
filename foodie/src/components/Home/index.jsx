import React from 'react';
import board from '../../assets/mainPage/0.jpeg'
import food from '../../assets/mainPage/1.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

function Home() {
    return (
        <>
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
            <Nav>
                <Nav.Item>
                    <Nav.Link className="nav_home" href="/Home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="nav_fav" href="/Favourites" eventKey="link-1">All time favourite</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="nav_new" to="/New" eventKey="link-2">Everyday Recipes</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="nav_try" to="/Try" eventKey="link-3">I want to try</Nav.Link>
                </Nav.Item>
            </Nav>
            <img src={food} className="food_photo" alt="cutting board" />
        </>
    )
}

export default Home;