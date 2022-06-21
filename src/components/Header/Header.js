import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'

const Header = () => {
  const {user, LogOut} = useAuth() || {};
    return (
        <div className="header-container">
            <Navbar bg="" fixed="top" expand="lg" >
  <Container fluid className="scroll">
    <Navbar.Brand  href="#">Volunteer Network</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        
      </Nav>
      <Form className="d-flex">
        <Link to="/">Home</Link>
        <Link to="donation">Donation</Link>
        <Link to="blog">Blog</Link>
        <Link to="events">Events</Link>
        {user?.email ?
          <Button onClick={LogOut} variant='light'>Logout</Button>:
          <Link to="login">Login</Link>
          }
        <Navbar.Text>
        <a href="#login">{user?.displayName}</a>
      </Navbar.Text>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;