import React, { useContext } from "react";
import {
    Navbar,
    Container,
    NavDropdown,
    Form,
    Nav,
    FormControl,
    Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { ValueContext } from "../../App";

const Header = (props) => {
    const cartContext = useContext(ValueContext);
    const { cart } = cartContext;

    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand as={Link} to="/">
                    Navbar scroll
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to="/login">
                            Login
                        </Nav.Link>
                        <Nav.Link as={Link} to="/content">
                            Content
                        </Nav.Link>
                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">
                                Action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" disabled>
                            {cart}
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="light">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
