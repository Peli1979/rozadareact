import CartWidget from "../CartWidget";
import "./NavBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/cartContext";

const NavBar = () => {
  const { totalQuantity } = useCartContext();

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to="/">FullPadelShop</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className="padel" to="/categoria/padel">
              Padel
            </Link>
            <Link className="tenis" to="/categoria/tenis">
              Tenis
            </Link>
            <Link className="tenis" to="/categoria/Accesorios">
              Accesorios
            </Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Carrito</Nav.Link>
            <Link to="cart">
              <CartWidget />
            </Link>
            <Nav.Link eventKey={2} href="#memes">
              {totalQuantity() !== 0 && totalQuantity()}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
