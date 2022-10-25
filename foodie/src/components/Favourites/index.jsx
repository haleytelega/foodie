import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import board from '../../assets/Favourites/0.jpg';
import chicken from '../../assets/Favourites/1.jpg'

function Favourite () {
    return (
        <>
        <img className="head-img" src={board} style={{ width: '100vw', height: '100vh'}} alt="cutting board" />
        <h1 className="Haleys_Favourites">Haley's Favourite Recipes</h1>

        <Card style={{ width: '18rem' }} className="Chicken">
            <Card.Img variant="top" src={chicken} className="chicken_image" />
            <Card.Body>
                <Card.Title className="chicken_title">Chicken Paprakash</Card.Title>
                <Card.Text className="chicken_text">
                    This is one of my favourite fall/winter recipes to make.
                </Card.Text>
            <Button variant="primary">Recipe</Button>
        </Card.Body>
    </Card>
    </>
    );
};

export default Favourite;