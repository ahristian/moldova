import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


export const NavigationBar = () => {
  return (
    <>
      <Navbar className="navigation" collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="#home">MOLDOVA TRAVEL GUIDE</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end pr-4 pl-2">
          <Nav className="justify-content-start">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Destinations</Nav.Link>
            <Nav.Link href="#pricing">Food and Wine</Nav.Link>
            <Nav.Link href="#pricing">Traditions</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>


    </>
  )
}
