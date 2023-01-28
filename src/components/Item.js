import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from "react";
import axios from "axios";
import "../styles/Cards.css"

import { useAuth0 } from "@auth0/auth0-react";


// item.js is from 3rd party API
function Item(props) {
    const [serverLink, setServerLink] = useState(process.env.REACT_APP_SERVER)
    const { user } = useAuth0();

    const addToFav = async ()=> {
        console.log(props.item)
        const things = {
            episodeName: props.item.name,
            episodeNumber: props.item.episode,
            airDate: props.item.air_date,
            url: props.item.url,
            created: props.item.created,
        }

        console.log(things)
        // let username = user.email;
        // const data = {email: user.email,thing:digimon}
        // episodes["email"] = user.email;
        // console.log("inside AddToFav", episodes)
        await axios.post(`${serverLink}/rick`, things );
    }

    return(
        <div id='episode-render' >
        <Card id='cards' >
        <Card.Img variant="top" src={"https://static1.pocketlintimages.com/wordpress/wp-content/uploads/162179-tv-news-feature-rick-and-morty-season-6-release-date-trailer-and-how-to-watch-image3-56nrtpmb7y.jpg"} />
        <Card.Body>
            <Card.Title>{props.item.name}</Card.Title>
            <Card.Title>{props.item.episode}</Card.Title>
            <Card.Title>{props.item.air_date}</Card.Title>
            {/* <Card.Title>{props.item.results.name}</Card.Title> */}
            <Card.Title>{props.item.url}</Card.Title>

            <Button variant="success" onClick={()=> {addToFav(props.item)}} >Add to faves</Button>

        </Card.Body>
        </Card>
        </div>
    )

}

export default Item;


// return(
//     <Card style={{ width: '18rem' }}>
//     <Card.Img variant="top" src={image} />
//     <Card.Body>
//         <Card.Title href={url}>{props.item.info.results.name}</Card.Title>
//         <Card.Title>{props.item.results.status}</Card.Title>
//         <Card.Title>{name}</Card.Title>
//         <Card.Title>{status}</Card.Title>
//         <Card.Title>{species}</Card.Title>
//         <Card.Title>{location}</Card.Title>
//         <Card.Title>{episode}</Card.Title>





//         {/* <Button variant="primary" onClick={()=> {(props.item)}}>Add to faves</Button> */}
//     </Card.Body>
//     </Card>
// )

// }


// Card.propTypes = {
// image: PropTypes.string.isRequired,
// url: PropTypes.string.isRequired,
// name: PropTypes.string.isRequired,
// status: PropTypes.string.isRequired,
// species: PropTypes.string.isRequired,
// location: PropTypes.shape({
//   name: PropTypes.string,
//   url: PropTypes.string,
// }).isRequired,
// episode: PropTypes.shape({
//   name: PropTypes.string,
//   url: PropTypes.string,
// }).isRequired,
// }

// export default Item;
