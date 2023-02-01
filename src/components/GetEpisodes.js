import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import Item from "./Item";
import "../styles/Episode.css";

function GetEpisodes() {
  const [results, setResults] = useState([]);
  const [serverLink, setServerLink] = useState(process.env.REACT_APP_SERVER);
  const [showItems, setShowItems] = useState(false);

  useEffect(() => {

    const getEpisodes = async () => {
      console.log(process.env.REACT_APP_SERVER)
      let resultsAPI = await axios.get(`${serverLink}/rick/episodeapi`);
      console.log("inside getepisodes", resultsAPI.data.results);

      setResults(resultsAPI.data.results);
      // console.log(results);
      // setShowItems(true);
    };
    getEpisodes();
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
       
      {
        results.map((item, idx) => <Item key={idx} item={item} />)}
    </div>
  );
}

export default GetEpisodes;

{
  /* <Item key={index} item={item}>{index+1}</Item> */
}

// <Card key={index} item={item} style={{ width: '18rem' }}>
// <Card.Img variant="top" src={item.image} />
// <Card.Body>
//     <Card.Title key={index} item={item} >{item.name}</Card.Title>
//     <Card.Title>{item.results.name}</Card.Title>

//     {/* <Button variant="primary" onClick={()=> {(props.item)}}>Add to faves</Button> */}
// </Card.Body>
// </Card>
