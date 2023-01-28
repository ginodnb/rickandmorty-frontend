import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Rick from "../Rick.jpg";
import 'primeicons/primeicons.css';
import { Link } from 'react-router-dom';
import "../styles/Footer.css"

function Footer() {
  return (

    <Card id='footer' text="secondary" bg='dark' className="text-center">
      <Card.Header><img className='logo' src={Rick} /></Card.Header>
      <Card.Body id='footerCard'>
        <Card.Title className='footerContent' >Github</Card.Title>
        <Card.Title className='footerContent' >Origional Docmentation</Card.Title>
        <Card.Title className='footerContent' >Random Episode</Card.Title>
        </Card.Body>
        <Card.Text >
        <i className="pi pi-code"></i> By Gino Arnone 2023
        </Card.Text>

      <Card.Footer className="text-muted"><i className="pi pi-github" style={{'fontSize': '2em'}}></i></Card.Footer>
    </Card>

  );
}

export default Footer;