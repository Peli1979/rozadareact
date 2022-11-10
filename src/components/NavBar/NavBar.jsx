import CartWidget from "../CartWidget"
import './NavBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";

const NavBar = () => {

    //variable de estado
    return (
      

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to="/">FullPadelShop</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Link to="/categoria/padel">Padel</Link>
          <Link to="/categoria/tenis">Tenis</Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Carrito</Nav.Link>
           <Link to='Cart'>
              <CartWidget/>
           </Link>
            <Nav.Link eventKey={2} href="#memes">
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
        
    )
}

export default NavBar