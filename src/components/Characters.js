import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Episode.css";
import ItemChar from "./ItemChar";
import CharTop from "./CharTop";

function Characters() {
  const [results, setResults] = useState([]);
  const [serverLink, setServerLink] = useState(process.env.REACT_APP_SERVER);
  const [showItems, setShowItems] = useState(false);

  useEffect(() => {
    const getChar = async () => {
      let resultsAPI = await axios.get(`${serverLink}/rick/charapi`);
      console.log("inside Characters", resultsAPI.data.results);
      setResults(resultsAPI.data.results);
      console.log(results);
      setShowItems(true);
      setServerLink();
    };
    getChar();
  }, []);

  return (
    // <Card style={{ width: '18rem' }}>
    //   <Card.Img variant="top" src="holder.js/100px180" />
    //   <Card.Body>
    //     <Card.Title>{showItems && results.map((item,index)=>(<Item key={index} item={item}/>))}</Card.Title>
    //     <Card.Text>

    //     </Card.Text>
    //     <Button variant="primary">Go somewhere</Button>
    //   </Card.Body>
    // </Card>

    <div className="cardParent">
      <CharTop />
      {/* {showItems &&
        results.map((item, index) => (
          <div className="cardStyle">
            <p key={index} item={item}>
              {item.name}
            </p>
            <p key={index} item={item}>
              {item.air_date}
            </p>
            
          </div>
        ))} */}
      {/* {showItems && results.map((item,index)=>(<Item key={index} item={item}/>))} */}
       
      {showItems &&
        results.map((item, idx) => <ItemChar index={idx} item={item} />)}
    </div>
  );
}

export default Characters;
