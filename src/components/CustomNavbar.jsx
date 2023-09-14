import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

function CustomNavbar() {
    return (
        <Navbar collapseOnSelect data-bs-theme="dark" sticky="top" expand="lg"  >
            <Container fluid >
                <Navbar.Brand as={NavLink} to="/">Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav  >
                        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                        <NavDropdown title="Contact" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="https://github.com/SouliosEv">Github</NavDropdown.Item>
                            <NavDropdown.Item href="https://www.linkedin.com/in/evangelos-soulios/">
                                LinkedIn
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="mailto:souliosev@gmail.com">
                                Email
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default CustomNavbar;