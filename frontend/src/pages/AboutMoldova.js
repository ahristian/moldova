import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import mapMoldova from '../shared/images/europeMoldova.png'
import Jumbotron from 'react-bootstrap/Jumbotron'/*
import chisinau from '../shared/images/chisinau.jpg'*/
import React from 'react'

export const AboutMoldova = () => {

  return (
    <>
      <section className="section-mainPicture">
        <Jumbotron className="imageBackgroundOrhei" fluid>
          <Container>
            <p>
              Moldova has plenty beautiful nature and architecture. The hospitality tradition stays hard in Moldovan`s
              peoples heart and they are happy to assist you during your visit.Travel to any corner of Moldova and you
              will be welcomed by warm and friendly people with food and wine as welcome.
            </p>
          </Container>
        </Jumbotron>
      </section>
      <section id="idMoldova" className="main-map">
        <Container>
          <Row>
            <Col>
              <h2>Moldova is in South East part of Europe</h2>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col md={6}>
              <Image src={mapMoldova} alt="Map of Moldova in the world"/>
            </Col>
            <Col md={6}>
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

     {/* <section className="section-mainWhen">
        <Container id="thingsToKnow">
          <Row>
            <Col md={7}>
              <h2>Things to know before visiting Moldova</h2>
              <p>
                As other post-Soviet country it is recommended as tourist to be aware and to avoid them. The
                biggest risk to travelers remains petty theft, such as pick pocketing. This generally occurs in the
                usual high-risk areas like crowded city streets in Chisinau and on buses and trains, especially
                international ones. Travelers should only use official taxis "yellow ones" so you don't get ripped
                off.
                Be on the lookout for overcharging by taxi drivers and restaurant or bar staff. To avoid this issue,
                agree on taxi fare before getting in the car and ask to see menu prices in writing before ordering.

              </p>
            </Col>
            <Col md={5}>
              <Image className="imageHomeBottom" src={chisinau} rounded/>
            </Col>
          </Row>
        </Container>
      </section>*/}

    </>
  )
}
