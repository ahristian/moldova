import React from "react"
import "./style.css"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import soroca from '../shared/images/soroca.jpg'
import grapes from '../shared/images/grapes.jpg'
import background from '../shared/images/background.jpg'
import moldovaSkies from '../shared/images/ovechi1.jpg'
import tighina from '../shared/images/bender2.jpg'
import orheiVechi from '../shared/images/orheiVechi.png'
import saharna from '../shared/images/saharna4.jpg'
import someWhereMoldova from '../shared/images/somewhereMoldova.jpg'
import Nav from 'react-bootstrap/Nav'
import { fetchAllDestinations } from '../store/destination'
import { DestinationCard } from '../ui/DestinationCard'
import { useDispatch, useSelector } from 'react-redux'

function randomScreen () {
let images = [soroca, grapes, moldovaSkies, background, tighina, orheiVechi, saharna, someWhereMoldova];
setInterval(function () {
  document.getElementsByClassName('bg-img')[0].setAttribute('style', 'background-image: url("' + images[0] + '")');
  images.splice(images.length, 0, images[0]);
  images.splice(0, 1);
}, 7000)
  }
export const Home = () => {

  const dispatch = useDispatch()
  const sideEffects = () => {
    dispatch(fetchAllDestinations())
  }
  React.useEffect(sideEffects, [])
  const destinations = useSelector(state => state.destinations ? state.destinations : []);

  return (
    <>
        <header onLoad={randomScreen()} >
          <Container fluid className="bg-img" style={{backgroundImage: "url(" + background + ")"}}>
          <Row className="py-2">
            <Col md={{span: 8, offset: 4}} sm={8}>
              <Nav.Link href="/aboutMoldova">
              <Button variant="outline-transparent text-cover text-center">Where is Moldova?</Button>
              </Nav.Link>
            </Col>
          </Row>
          <Row>
            <Col md={{span: 6, offset: 6}} sm={8}>
              <Nav.Link href="/aboutMoldova">
              <Button id="btn-travel" variant="outline-transparent text-cover text-right">Things to know before to travel</Button>
              </Nav.Link>
              </Col>
          </Row>
          <Row>
            <Col md={{span: 8, offset: 3}} sm={8}>
              <Nav.Link href="/destinations">
              <Button variant="outline-transparent text-cover">What can I visit in Moldova?</Button>
              </Nav.Link>
            </Col>
          </Row>
          <Row>
            <Col md={{span: 9, offset: 1}} sm={8}>
              <Nav.Link href="/traditions">
              <Button variant="outline-transparent text-cover">What traditions are in Moldova?</Button>
                </Nav.Link>
            </Col>
          </Row>
          <Row>
            <Col md={{span: 8, offset: 4}} sm={8}>
              <Nav.Link href="/foods">
              <Button variant="outline-transparent text-cover">What are some traditional food in
                Moldova?</Button>
              </Nav.Link>
            </Col>
          </Row>
          </Container>
      </header>
      <section className="destination">
        <Container>
          <Row>
            <Col>
              <h1>Things Not to Miss in Moldova</h1>
              <p>The Republic of Moldova has a rich cultural heritage which may be of great interest to tourists. 140
                cultural
                heritage sites may be included in the tourist circuit. The earliest visible remains of the built
                heritage are
                Geto-Dacian sites and Roman fortifications. The remains of medieval fortresses, archaeological complexes
                such as
                Orheiul Vechi.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="destinationCard mx-2">
        <Container>
          <Row md={2} className="justify-content-center">
            {destinations.map(destination => <DestinationCard destination={destination}
                                                              key={destination.destinationId}/>)}
          </Row>
        </Container>
      </section>
    </>
  )
}
