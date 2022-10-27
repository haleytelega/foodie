import React from "react";
import Card from "react-bootstrap/Card";
import board from "../../assets/Favourites/0.jpg";
import chicken from "../../assets/Favourites/1.jpg";
import fajita from "../../assets/Favourites/2.jpg";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Typography from "@mui/material/Typography";
// import Nav from 'react-bootstrap/Nav';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

function Favourite() {
  const [open, setOpen] = React.useState(false);
  const [currentOpen, setCurrentOpen] = React.useState(false);
  const handleOpen = (item) => {
    setOpen(true);
    setCurrentOpen(item);
  };

  const handleClose = (item) => {
    setOpen(false);
    setCurrentOpen(item);
  };

  return (
    <>
      <img
        className="head-img"
        src={board}
        style={{ width: "100vw", height: "100vh" }}
        alt="cutting board"
      />
      <h1 className="Haleys_Favourites">Haley's Favourite Recipes</h1>

      <Card style={{ width: "18rem" }} className="Chicken">
        <Card.Img variant="top" src={chicken} className="Fav_image" />
        <Card.Body>
          <Card.Title className="Fav_title">Chicken Paprakash</Card.Title>
          <Card.Text className="Fav_text">
            This is one of my favourite fall/winter recipes to make.
          </Card.Text>
          <div>
            <Button
              variant="outlined"
              onClick={() => handleOpen("chicken1")}
              className="button"
            >
              Recipe
            </Button>

            {currentOpen === "chicken1" && (
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={() => handleClose("chicken1")}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={open}>
                  <Box sx={style}>
                    <Typography
                      id="transition-modal-title"
                      variant="h6"
                      component="h2"
                      className="chicken_title"
                    >
                      Chicken Paprakash
                    </Typography>
                    <Typography
                      id="transition-modal-title"
                      variant="subtitle1"
                      component="h2"
                      className="chicken_serving"
                    >
                      Serving: 4 people
                    </Typography>
                    <Row xs={1} md={2}>
                      <Col>
                        <Typography
                          id="transition-modal-description"
                          sx={{ mt: 2 }}
                        >
                          Ingredients:
                          <ol>
                            <li>4 chicken legs</li>
                            <li>oil</li>
                            <li>half an onion (chopped) </li>
                            <li>4 tablespoons of paprika</li>
                            <li>2 1/2 cups chicken broth</li>
                            <li>1 tub of sour cream</li>
                            <li>1 tablespoon of flour</li>
                            <li>salt</li>
                            <li>egg noodles</li>
                          </ol>
                        </Typography>
                      </Col>
                      <Col>
                        <Typography
                          id="transition-modal-description"
                          sx={{ mt: 2 }}
                        >
                          Instructions:
                          <ol>
                            <li>
                              Season chicken with salt and pepper then brown
                              chicken in oil.
                            </li>
                            <li>
                              As chicken is browning, combine sour cream and
                              flour.
                            </li>
                            <li>Put browned chicken in dutch oven.</li>
                            <li>Add more oil and cook onions until soft.</li>
                            <li>
                              Add paprika and stir completely. Add sour cream
                              and onion mix and stir completley and then add
                              chicken broth
                            </li>
                            <li>
                              Stir until all combined and cook for 10 minutes.
                            </li>
                            <li>
                              Pour sauce into dutch oven and cook at 350% for 45
                              minutes
                            </li>
                            <li>Serve with buttery egg noodles</li>
                          </ol>
                        </Typography>
                        <Typography
                          id="transition-modal-description"
                          sx={{ mt: 2 }}
                          className="exit"
                          variant="subtitle1"
                        >
                          Click outside of the box to exit!
                        </Typography>
                      </Col>
                    </Row>
                  </Box>
                </Fade>
              </Modal>
            )}
          </div>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }} className="Fajita">
        <Card.Img variant="top" src={fajita} className="Fav_image" />
        <Card.Body>
          <Card.Title className="Fav_title">Chicken Fajitas</Card.Title>
          <Card.Text className="Fav_text">
            Great for when you only have a few minutes to cook dinner.
          </Card.Text>
          <div>
            <Button
              variant="outlined"
              onClick={() => handleOpen("chicken2")}
              className="button"
            >
              Recipe
            </Button>

            {currentOpen === "chicken2" && (
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={() => handleClose("chicken2")}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={open}>
                  <Box sx={style}>
                    <Typography
                      id="transition-modal-title"
                      variant="h6"
                      component="h2"
                      className="Fav_title"
                    >
                      Chicken Fajitas
                    </Typography>
                    <Typography
                      id="transition-modal-titles"
                      variant="subtitle1"
                      component="h2"
                      className="Fav_serving"
                    >
                      Serving: 4 people
                    </Typography>
                    <Row>
                      <Col md={6}>
                        <Typography
                          id="transition-modal-description"
                          sx={{ mt: 2 }}
                        >
                          Ingredients:
                          <ol>
                            <li>3 chicken breast</li>
                            <li>oil</li>
                            <li>half an onion (sliced)</li>
                            <li>2 large peppers (sliced)</li>
                            <li>1-2 Old El Paso Fajita seasoning packets</li>
                            <li>Tortillas</li>
                          </ol>
                        </Typography>
                      </Col>
                      <Col md={6}>
                        <Typography
                          id="transition-modal-description"
                          sx={{ mt: 2 }}
                        >
                          Instructions:
                          <ol>
                            <li>Cook chicken in oil until cooked.</li>
                            <li>Add packets of seasoning.</li>
                            <li>Add onion and peppers.</li>
                            <li>
                              1/4-2/3 cups (depending how many packets used).
                            </li>
                            <li>Cook everything for 3-5 minutes</li>
                            <li>
                              Put in tortilla with all condaments you want.
                            </li>
                          </ol>
                        </Typography>
                        <Typography
                          id="transition-modal-description"
                          sx={{ mt: 2 }}
                          className="exit"
                          variant="subtitle1"
                        >
                          Click outside of the box to exit!
                        </Typography>
                      </Col>
                    </Row>
                  </Box>
                </Fade>
              </Modal>
            )}
          </div>
        </Card.Body>
      </Card>
      {/* <Nav className="Fav_Home">
        <Nav.Item>
            <Nav.Link className="nav_home" href="/Home">Home</Nav.Link>
        </Nav.Item>
        </Nav> */}
    </>
  );
}

export default Favourite;
