import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { Link } from "react-router-dom";

import "./Navbar.css";

const NavbarBootstrap = () => {
  return (
    <Navbar bg="custom-gb" fixed="top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/main">
          FilMax
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavDropdown title="Movies" id="navbarScrollingDropdown" >
              <NavDropdown.Item as={Link} to="/main" >
                Popular
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/main">
                En carteleras hoy
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/main">
                Proximamente
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/main">
                Mejor Valoradas
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Series" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/main">
                Popular
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/main">
                Se emiten hoy
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/main">
                Mejor valoradas
              </NavDropdown.Item>
            </NavDropdown>

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarBootstrap;
