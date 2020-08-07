import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export const FooterElement = () => {
  return (
    <>
      <footer>
        <Container className="footer-fluid" fluid>
          <Container>
            <Row>
              <Col sm={6}>
                <p className="footer-p1">The website was created by: </p>
              </Col>
              <Col sm={6}>

                  <p className="name"> Andrei Hristian
                    <a href="https://www.linkedin.com/in/andrei-hristian-a673551b3/" target="_blank">
                    <FontAwesomeIcon className="fa-2x" id="linkedInIcon" icon={["fab", "linkedin"]}/>
                    </a>
                    <a href="https://github.com/ahristian?tab=repositories" target="_blank">
                      <FontAwesomeIcon className="fa-2x" id="faGithub" icon={faGithub}/>
                    </a>
                  </p>


              </Col>
            </Row>
            <Row>
              <Col>
                <p className="Footer-Note">2020 Albuquerque, New Mexico </p>
              </Col>
            </Row>
          </Container>
        </Container>
      </footer>

    </>
  )
}