import { Link as RouterLink } from 'react-router-dom'
import '../header/header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header( {logo} ){
    return(
        <Navbar bg="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/states">Sates Information</Navbar.Brand>
                <Navbar.Toggle aria-controls="Hamburger navbar Menu" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/states">Home</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/states/map">US Map</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/states/quiz">Quick Quiz</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;