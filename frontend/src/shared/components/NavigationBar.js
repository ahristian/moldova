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
            <Nav.Link href="/aboutMoldova">About Moldova</Nav.Link>
            <Nav.Link href="/foods">Food</Nav.Link>
            <Nav.Link href="/traditions">Traditions</Nav.Link>
            <Nav.Link href="/profile/:profileId">Profile</Nav.Link>
            <Nav.Link href="/sign-in">Sign-in</Nav.Link>
            <Nav.Link href="/sign-out">Sign-out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    </>
  )
}
