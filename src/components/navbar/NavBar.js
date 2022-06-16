import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget'

const NavBarApp = () =>{
    return(
        <Navbar className='navBgColor' expand="lg">
        <Container>
            <CartWidget/>
            <Navbar.Brand className='' href="#home">Tienda Nico</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">About us</Nav.Link>
                <NavDropdown title="Productos" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Tecnologia</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    Domotica
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Audio</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                    Garantia
                </NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}
export default NavBarApp