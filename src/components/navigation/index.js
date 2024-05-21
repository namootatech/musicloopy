import React, { useState } from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';

const NavigationBar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <Navbar bg="light" variant="light" expand="lg" className="border-bottom border-gray-200 dark:bg-gray-900">
            <Container>
                <Navbar.Brand href="/">
                    <img src="logo.png" style={{ height: "2rem" }} className="me-3" alt="Music Loopy Logo" />
                    <span className="text-2xl font-semibold">Music Loopy</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={toggleMobileMenu} />
                <Navbar.Collapse id="responsive-navbar-nav" className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMobileMenuOpen ? 'show' : ''}`}>
                    <Nav className="mr-auto">
                        <Nav.Link href="/" className="px-3 py-2 text-grAY-900 rounded">Home</Nav.Link>
                        <Nav.Link href="/#contact" className="px-3 py-2 text-gray-900 rounded hover:bg-gray-100">Contact</Nav.Link>
                    </Nav>
                    <Nav>
                        <Button className="px-4 py-2 text-white bg-green-700 hover:bg-green-800 rounded-lg">Donate</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
