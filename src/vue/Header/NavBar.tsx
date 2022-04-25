import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import './Header.css' 

const NavBar: React.FC = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="">
            <img 
              className="imgBrand me-5"
              src={window.location.origin + "/image/info.png"}
              alt="cofee"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Actu/info</Nav.Link>
            <Nav.Link href="/randomUsers">RandomUsers</Nav.Link>
            <Nav.Link href="/artist">Artist</Nav.Link>
            <Nav.Link href="/coinMarket">CoinMarket</Nav.Link>
          </Nav>
      </Navbar>
    </div>
  );
};

export default NavBar;
