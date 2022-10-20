import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import board from '../../assets/Favourites/0.jpg';
import chicken from '../../assets/Favourites/1.jpg'

function Favourite () {
    return (
        <>
        <img className="head-img" src={board} style={{ width: '100vw', height: '100vh'}} alt="cutting board" />
        <h1 className="Haleys_Favourites">Haley's Favourite Recipes</h1>

        <Carousel fade>
                <Carousel.Item className="carousel">
                    {/* <img
                    className="d-block w-100"
                    src={chicken}
                    alt="chicken paprikash"
                    /> */}
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={chicken}
                    alt="chicken paprikash"
                    />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </>
    )
};

export default Favourite;