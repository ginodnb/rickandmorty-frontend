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
        <Navbar bg="light" expand="lg">
            <Container>
                <img className="logo" src={Rick} />
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Link to={"/Home"} >Home</Link>
                
                <Link to={"/Favourites"} >Favourites</Link>
                {/* <Nav.Link href="#link">Favourites</Nav.Link> */}
                <Nav.Link href="#link">Episodes</Nav.Link>
                <NavDropdown title="My Account" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Account</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
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