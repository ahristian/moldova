import React, { useEffect, useState } from "react"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { SignUpModal } from './sign-up/SignUpModal'
import { SignInModal } from './sign-in/SigninModal'
import { SignOutComponent } from './SignOut'
import { fetchAuth } from '../../store/auth'


export const NavigationBar = (props) => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch()
  const effects = () => {
    dispatch(fetchAuth());
  };
  const inputs = [];
  useEffect(effects, inputs);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      <Navbar className="navigation" collapseOnSelect expand="lg" bg="dark" variant="dark" >
        <Navbar.Brand href="#home">MOLDOVA TRAVEL GUIDE</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end pr-4 pl-2">
          <Nav className="justify-content-start">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/foods">Food</Nav.Link>
            <Nav.Link href="/traditions">Traditions</Nav.Link>
            <Nav.Link href="/aboutMoldova">About Moldova</Nav.Link>
            <Nav.Link href="/profile/:profileId">Profile</Nav.Link>

            {auth !== null && (
              <>
            <NavDropdown className="nav-link navbar-username" title={auth?.profileUserName ?? ""} >
              <div className="dropdown-item">
                <Nav.Link to={`/profile/${auth?.profileId}`} className="btn btn-outline-dark">
                  <FontAwesomeIcon icon="user-alien" />&nbsp;&nbsp;My Profile
                </Nav.Link>
              </div>
              <SignOutComponent />
            </NavDropdown>
              </>
            )}
            {isModalOpen()  &&  (
              <>
                <SignUpModal/>
                <SignInModal show={show} handleClose={handleClose} handleShow={handleShow}/>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    </>
  )
}
