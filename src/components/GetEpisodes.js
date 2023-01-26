import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import Item from "./Item";



function GetEpisodes () {

    const [results, setResults] = useState([]);
    const [serverLink, setServerLink] = useState(process.env.REACT_APP_SERVER)
    const [showItems, setShowItems] = useState([])

    useEffect(() => {
        const getEpisodes = async() => {
            let resultsAPI = await axios.get(
                `${serverLink}/episodeapi`
            );
                console.log("inside getepisodes", resultsAPI.data)
            setResults(resultsAPI.data);
            setShowItems(true);
            setServerLink();
        }
        getEpisodes()
    },[])

    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>            {showItems &&
results.map((item,index)=>(<Item key={index} item={item}/>))}</Card.Title>
            <Card.Text>


            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>


    )
}

export default GetEpisodes;

{/* <div>
{showItems &&
results.map((item,index)=>(<Item key={index} item={item}/>))}

</div> */}