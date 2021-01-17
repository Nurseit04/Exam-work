import React, {Component} from 'react';
import {Navbar, Nav, Container} from "react-bootstrap";

class NavbarCustom extends Component {
    render() {
        return (

                <Navbar bg="dark" fixed variant="dark">
                    <Container>
                    <Navbar.Brand href="">Navbar</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link href="">Home</Nav.Link>
                        <Nav.Link href="">Registration</Nav.Link>
                        <Nav.Link href="">Login</Nav.Link>
                    </Nav>
                    </Container>
                </Navbar>
        );
    }
}

export default NavbarCustom;