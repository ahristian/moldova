import React, { useEffect, useState } from "react"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAuth } from '../../store/auth'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { SignInForm } from './sign-in/SignInForm'
import { SignUpForm } from './sign-up/SignUpForm'
import { SignOutComponent } from './SignOut'


export const NavigationBar = (props) => {
  const {profile} = props
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch()
  const effects = () => {
    dispatch(fetchAuth());
  };
  const inputs = [];
  useEffect(effects, inputs);

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  // isModalOpen prevents the sign in modal being removed from the dom before the
  // sign-in modal is closed by the user
  const isModalOpen = ()=> {
    if(!auth) {
      return !auth
    } else if(show === true && auth  ) {
      return true
    }
  }
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
        <Navbar.Brand href="#home">MOLDOVA TRAVEL GUIDE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end pl-2 mr-5">
          <Nav >
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/foods">Food</Nav.Link>
            <Nav.Link href="/traditions">Traditions</Nav.Link>
            <Nav.Link href="/aboutMoldova">About Moldova</Nav.Link>
            <NavDropdown id="basic-nav-dropdown" title="Profile" className="mr-3" >
              {auth !== null && (
                <>
                  <NavDropdown.Item href={`/profile/${auth?.profileId}`}>
                    <Button className="btn btn-dark">
                      My Profile &nbsp;
                    </Button>
                    <NavDropdown.Divider />
                  </NavDropdown.Item>
                </>
              )}
              {auth === null && (
                <>
              <NavDropdown.Item href="" onClick={handleShow2}>
                <Button className="btn btn-dark" onClick={handleShow}>
                  Sign Up &nbsp;&nbsp;<FontAwesomeIcon icon="user"/>
                </Button>
              </NavDropdown.Item>
              <NavDropdown.Item href="" onClick={handleShow}>
                <Button className="btn btn-dark" onClick={handleShow}>
                  Log In &nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon="sign-in-alt"/>
                </Button>
              </NavDropdown.Item>
                </>
              )}
              {auth !== null && (
                <>
                  <NavDropdown.Item>
                    <SignOutComponent />
                  </NavDropdown.Item>
                </>
              )}
               </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Modal id="signInModal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          < SignInForm />
        </Modal.Body>
      </Modal>

      <Modal id="signUpModal" show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignUpForm/>
        </Modal.Body>
      </Modal>

    </>
  )
}
