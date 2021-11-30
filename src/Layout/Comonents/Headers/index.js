import "./index.css";

import React from "react";
import { Container, Navbar } from "react-bootstrap";

export default function Header() {
  return (
    <>
      <div>
        <Navbar className="navbar-dark" sticky="top">
          <Container fluid>
            <Navbar.Brand href="#home">Samcanes</Navbar.Brand>
          </Container>
        </Navbar>
      </div>
    </>
  );
}
