import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Rick from "../Rick.jpg";
import "../styles/Header.css"
// import Favourites from "./Favourites";
import { Link } from 'react-router-dom';




function Header() {
    return (
        <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
            <Container>
                <img className="logo" src={Rick} />
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle id="burger" aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                {/* <Nav.Link href="#">Home</Nav.Link> */}
                <Link className="links" to={"/Home"} >Home</Link>
                <Link className="links" to={"/Profile"} >Profile</Link>
                
                <Link className="links" to={"/Favourites"} >Favourites</Link>
                {/* <Nav.Link href="#link">Favourites</Nav.Link> */}
                {/* <Nav.Link href="#link">Episodes</Nav.Link> */}
                <Link className="links" to={"/Episodes"} >Episodes</Link>
                <Link className="links" to={"/Characters"} >Characters</Link>
                <NavDropdown title="My Account" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Account</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Logout
                    </NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        );


}

export default Header;