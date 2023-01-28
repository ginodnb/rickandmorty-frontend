import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../styles/Hero.css";
import HomeWelcome from "./HomeWelcome";


function Home () {
    return (
        <>
        <HomeWelcome />
        {/* <Card id="cardOne" className="cards">
        <Card.Body>
          <Card.Title>Rick And Morty Fansite</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

        <Card className="cards" style={{ width: '50vw' }}>
          <Card.Img id="hero" variant="top" src="https://cdn.mos.cms.futurecdn.net/3ZESUwtuMsNyPmxGCMptW3.png" />

        </Card> */}
        </>
      );
    }

export default Home;