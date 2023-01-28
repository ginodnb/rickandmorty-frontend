import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DeleteEp from './DeleteEp';
import "../styles/FaveCard.css";

function FaveEpisode(props) {
    console.log(props)
    return(
        <div id='fave-parent' >
        <Card id='faves'>
        <Card.Img variant="top" src={"https://static1.pocketlintimages.com/wordpress/wp-content/uploads/162179-tv-news-feature-rick-and-morty-season-6-release-date-trailer-and-how-to-watch-image3-56nrtpmb7y.jpg"} />
        <Card.Body>
            <Card.Title>{props.item.episodeName}</Card.Title>
            <Card.Title>{props.item.episodeNumber}</Card.Title>
            <Card.Title>{props.item.airDate}</Card.Title> 
            <Card.Title>{props.item.url}</Card.Title> 
            <Card.Title>{props.item.created}</Card.Title> 
            <div id='button-holder' >
            <Button variant="danger" onClick={()=>DeleteEp(props)}>Delete</Button>
            <Button variant="dark" onClick={()=> props.showUpdateModalProps(props.item)}>Update</Button>
            </div>
        </Card.Body>
        </Card>
        </div>
    )

}

export default FaveEpisode;