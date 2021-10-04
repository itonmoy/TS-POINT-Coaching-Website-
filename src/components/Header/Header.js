
import React from 'react';
import './Header.css'
import { Navbar, Container, Nav, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle={
        fontWeight: "bold",
        color: "white"
      }
    return (
        <div>
            <Navbar  bg="dark" variant="light">
                <Container>
                    
                    {/* <Navbar.Brand  href="/home">TS POINT</Navbar.Brand> */}
                    <Nav className="mx-auto navbar">
                        <Stack direction="horizontal" gap={5}>
                            <NavLink className="Nav-item" activeStyle={activeStyle}  to="/home">Home</NavLink>
                            <NavLink className="Nav-item"  activeStyle={activeStyle}  to="/about">About</NavLink>
                            <NavLink className="Nav-item"  activeStyle={activeStyle}  to="/services">Services</NavLink>
                            <NavLink className="Nav-item"  activeStyle={activeStyle}  to="/events">Events</NavLink>
                        </Stack>
                    </Nav>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;