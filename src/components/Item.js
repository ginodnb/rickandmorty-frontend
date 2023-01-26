import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from "react";
import axios from "axios";
// import { useAuth0 } from "@auth0/auth0-react";


// item.js is from 3rd party API
function Item(props) {
    // const [serverLink, setServerLink] = useState(process.env.REACT_APP_SERVER)
    // const { user } = useAuth0();

    // const addToFav = async (digimon)=> {
        // let username = user.email;
        // const data = {email: user.email,thing:digimon}
    //     digimon["email"] = user.email;
    //     console.log("inside AddToFav", digimon)
    //     await axios.post(`${serverLink}/digimon`,digimon);
    // }

    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.item.image} />
        <Card.Body>
            <Card.Title>{props.item.info.results.name}</Card.Title>
            <Card.Title>{props.item.info.results.status}</Card.Title>

            {/* <Button variant="primary" onClick={()=> {(props.item)}}>Add to faves</Button> */}
        </Card.Body>
        </Card>
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
