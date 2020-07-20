import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import Logo from "../assets/logo.png";
const Header = () => {
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand href="/">
          <img src={Logo} alt={Logo} style={{ width: 140 }} />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Container>
    </Navbar>
  );
};

export default Header;
