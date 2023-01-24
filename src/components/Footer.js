import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Rick from "../Rick.jpg";
import 'primeicons/primeicons.css';

function Footer() {
  return (
    <Card className="text-center">
      <Card.Header><img className='logo' src={Rick} /></Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted"><i className="pi pi-github" style={{'fontSize': '2em'}}></i></Card.Footer>
    </Card>
  );
}

export default Footer;