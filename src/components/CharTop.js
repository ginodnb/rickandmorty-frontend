import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../styles/Hero.css";
import GetEpisodes from "./GetEpisodes";
import { Splitter, SplitterPanel } from 'primereact/splitter';



function CharTop () {
    return (
        <>
        <div id="card-parent" >
        <Card text="light" id="cardOne" className="cards">
        <Card.Body>
          <Card.Title>Rick And Morty Fansite</Card.Title>
          <Card.Text>
            All Characters!
          </Card.Text>
          <Button variant="success">Go somewhere</Button>
        </Card.Body>
      </Card>
      

        <Card className="cards" style={{ width: '50vw' }}>
          <Card.Img id="hero" variant="top" src="https://cdn.mos.cms.futurecdn.net/3ZESUwtuMsNyPmxGCMptW3.png" />

        </Card>
        </div>


        </>
      );
    }

export default CharTop;