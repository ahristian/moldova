import React from "react"
import "./style.css"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import mapEurope from './images/locationMoldova.svg.png'
import mapMoldova from './images/hartaMoldovei.jpg'
import { NavigationBar } from './components/NavigationBar'


export const Home = () => {
  return (
    <>
      <header>
        <Container className="background-mainPage front-cover py-2">
          <NavigationBar/>
            <Row>
              <Col md={{ span: 8, offset: 4 }} sm={4}>
                <Button variant="outline-transparent text-cover text-center">Where is Moldova?</Button>
              </Col>
            </Row>
            <Row>
              <Col md={{ span: 6, offset: 6 }} sm={4}>
                <Button variant="outline-transparent text-cover text-right">Things to know before to travel</Button>
              </Col>
            </Row>
            <Row>
              <Col md={{ span: 6, offset: 3 }} sm={4}>
                <Button variant="outline-transparent text-cover">What can I visit in Moldova?</Button>
              </Col>
            </Row>
            <Row>
              <Col md={{ span: 7, offset: 1 }} sm={4}>
                <Button variant="outline-transparent text-cover">What traditions are in Moldova?</Button>
              </Col>
            </Row>
          <Row >
            <Col md={{ span: 7, offset: 5 }} sm={4}>
              <Button variant="outline-transparent text-cover">What are some traditional food and drinks in Moldova?</Button>
            </Col>
            </Row>
        </Container>
      </header>
      <section className="main-map">
        <Container>
          <Row>
            <Col>
              <h2>Moldova is in South East part of Europe</h2>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <Image src={mapEurope} alt="Map of Moldova in the world"/>
              <Image src={mapMoldova} alt="Map of Moldova in the world"/>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
