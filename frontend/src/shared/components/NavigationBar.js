import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


export const NavigationBar = () => {
  return (
    <>
      <Navbar className="navigation" collapseOnSelect expand="lg" bg="dark" variant="dark" >
        <Navbar.Brand href="#home">MOLDOVA TRAVEL GUIDE</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end pr-4 pl-2">
          <Nav className="justify-content-start">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/destinations">Destinations</Nav.Link>
            <Nav.Link href="/foods">Food</Nav.Link>
            <Nav.Link href="/traditions">Traditions</Nav.Link>
            <Nav.Link href="/test">Test</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    </>
  )
}
