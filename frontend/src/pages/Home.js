import React from "react"
import "./style.css"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Jumbotron from 'react-bootstrap/Jumbotron'
import mapMoldova from '../shared/images/europeMoldova.png'
import chisinau from '../shared/images/chisinau.jpg'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

import soroca from '../shared/images/soroca.jpg'
import grapes from '../shared/images/grapes.jpg'
import background from '../shared/images/background.jpg'
import moldovaSkies from '../shared/images/moldova-de-la-inaltimea.jpg'
import tighina from '../shared/images/tighina.jpg'
import orheiVechi from '../shared/images/orheiVechi.png'
import someWhereMoldova from '../shared/images/somewhereMoldova.jpg'

function randomScreen () {
let images = [soroca,
  grapes,
  moldovaSkies,
  background,
  tighina,
  orheiVechi,
  someWhereMoldova];
setInterval(function () {
  document.getElementsByClassName('bg-img')[0].setAttribute('style', 'background-image: url("' + images[0] + '")');
  images.splice(images.length, 0, images[0]);
  images.splice(0, 1);
}, 7000)
  }

export const Home = () => {
  return (
    <>
        <header onLoad={randomScreen()} >
          <Container fluid className="bg-img" style={{backgroundImage: "url(" + background + ")"}}>
          <Row className="py-2">
            <Col md={{span: 8, offset: 4}} sm={4}>
              <Button href="#idMoldova" variant="outline-transparent text-cover text-center">Where is Moldova?</Button>
            </Col>
          </Row>
          <Row>
            <Col md={{span: 6, offset: 6}} sm={4}>
              <Button href="#thingsToKnow" id="btn-travel" variant="outline-transparent text-cover text-right">Things to know before to travel</Button>
              </Col>
          </Row>
          <Row>
            <Col md={{span: 6, offset: 3}} sm={4}>
              <Link to="/destinations">
              <Button variant="outline-transparent text-cover">What can I visit in Moldova?</Button>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col md={{span: 7, offset: 1}} sm={4}>
              <Link to="/traditions">
              <Button variant="outline-transparent text-cover">What traditions are in Moldova?</Button>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col md={{span: 7, offset: 5}} sm={4}>
              <Link to="/foodWine">
              <Button variant="outline-transparent text-cover">What are some traditional food in
                Moldova?</Button>
              </Link>
            </Col>
          </Row>
          </Container>
      </header>

      <section  id="idMoldova" className="main-map">
        <Container>
          <Row>
            <Col>
              <h2>Moldova is in South East part of Europe</h2>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <Image src={mapMoldova} alt="Map of Moldova in the world"/>
            </Col>
            <Col xs={12} md={8}>
              <p>Moldova, officially the Republic of Moldova is a country in South Eastern Europe, bordered by
                Romania to the west and Ukraine to the north, east, and south. The capital and the main city is
                Chișinău.
              </p>
              <p>The Republic of Moldova has a rich cultural heritage which may be of great interest to tourists. The
                remains of medieval fortresses like Tighina and Soroca, archaeological complexes such as Orheuil Vechi,
                cave monasteries, nobles’ mansions and peasant houses offer a diversity of visitor attractions.
              </p>
              <p>The Moldovan border looks like a grape bunch, and somehow this defines the culture and traditions of
                this nation. The land is one the best in the world for growing grapes and this makes Moldova a very
                special country in terms of wines. The wine has long tradition here there are many underground
                limestone tunnels. The tunnels are lined wall-to-wall with bottles from 60km (37miles) to 120km
                (75miles) long tunnels, dating from the 15th century wine.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section-mainPicture">
        <Jumbotron className="imageBackgroundOrhei" fluid>
          <Container >
            <p>
              Moldova has plenty beautiful nature and architecture. Being the poorest country in Europe, it has many
              social problems. However, the hospitality tradition stays hard in Moldovan`s peoples heart and they are
              happy to assist you.
            </p>
          </Container>
        </Jumbotron>
      </section>
      <section className="section-mainWhen">
        <Container>
          <Row>
            <Card style={{ width: '50rem' }}>
              <Card.Title id="thingsToKnow"><h2>Things to know before visiting Moldova</h2></Card.Title>
              <Card.Body>
                <Card.Text >
                  As other post-Soviet country it is recommended as tourist to be aware and to avoid them. The
                    biggest risk to travelers remains petty theft, such as pick pocketing. This generally occurs in the
                    usual high-risk areas like crowded city streets in Chisinau and on buses and trains, especially
                    international ones. Travelers should only use official taxis "yellow ones" so you don't get ripped
                    off.
                    Be on the lookout for overcharging by taxi drivers and restaurant or bar staff. To avoid this issue,
                    agree on taxi fare before getting in the car and ask to see menu prices in writing before ordering.

                </Card.Text>
              </Card.Body>
              <Image variant="bottom" src={chisinau} rounded  />
            </Card>
          </Row>
        </Container>
      </section>
    </>
  )
}
