import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from "react";
import axios from "axios";
import "../styles/Cards.css"

// import { useAuth0 } from "@auth0/auth0-react";


function ItemChar(props) {


    return (
        <Card id='cards' >
        <Card.Img variant="top" src={props.item.image} />
        <Card.Body>
            <Card.Title>{props.item.name}</Card.Title>
            <Card.Title>{props.item.status}</Card.Title>
            <Card.Title>{props.item.gender}</Card.Title>
            <Card.Title>{props.item.location.name}</Card.Title>

            {/* <Button variant="primary" onClick={()=> {(props.item)}}>Add to faves</Button> */}
        </Card.Body>
        </Card>
    )

}

export default ItemChar;