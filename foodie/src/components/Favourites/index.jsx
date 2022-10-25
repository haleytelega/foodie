import React from 'react';
import Card from 'react-bootstrap/Card';
import board from '../../assets/Favourites/0.jpg';
import chicken from '../../assets/Favourites/1.jpg';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Typography from '@mui/material/Typography';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


function Favourite () {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                <div>
      <Button variant="outlined" onClick={handleOpen} className="button">Recipe</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2" className="chicken_title">
            Chicken Paprakash
            </Typography>
            <Typography id="transition-modal-title" variant="subtitle1" component="h2" className="chicken_serving">
            Serving: 4 people
            </Typography>
                <Row style={{
        backgroundColor: 'pink',
      }} lg={12}>
                    <Col md={6}>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            Ingredients:
                <ol>
                    <li>4 chicken legs</li>
                    <li>oil</li>
                    <li>half an onion</li>
                    <li>4 tablespoons of paprika</li>
                    <li>2 1/2 cups chicken broth</li>
                    <li>1 tub of sour cream</li>
                    <li>1 tablespoon of flour</li>
                    <li>salt</li>
                    <li>egg noodles</li>
                </ol>
            </Typography>
            </Col>
            <Col md={6}>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Instructions:
              <ol>
                    <li>Season chicken with salt and pepper then brown chicken in oil.</li>
                    <li>As chicken is browning, combine sour cream and flour.</li>
                    <li>Put browned chicken in dutch oven.</li>
                    <li>Add more oil and cook onions until soft.</li>
                    <li>Add paprika and stir completely. Add sour cream and onion mix and stir completley and then add chicken broth</li>
                    <li>Stir until all combined and cook for 10 minutes.</li>
                    <li>Pour sauce into dutch oven and cook at 350% for 45 minutes</li>
                    <li>Serve with buttery egg noodles</li>
                </ol>
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }} className="exit" variant="subtitle1">
              Click outside of the box to exit!
            </Typography>
            </Col>
            </Row>
          </Box>
        </Fade>
      </Modal>
    </div>
        </Card.Body>
    </Card>
    </>
    );
};


export default Favourite;