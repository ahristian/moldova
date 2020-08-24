import React from "react"
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Dedrarium from '../shared/images/dendrarium.jpg'


export const Destinations = () => {
  return (
    <>
      <section className="destination">
      <Container>
        <Row>
          <Col>
            <h1>Things Not to Miss in Moldova</h1>
            <p>The Republic of Moldova has a rich cultural heritage which may be of great interest to tourists. 140 cultural
              heritage sites may be included in the tourist circuit. The earliest visible remains of the built heritage are
              Geto-Dacian sites and Roman fortifications. The remains of medieval fortresses, archaeological complexes such as
              Orheiul Vechi.
            </p>
          </Col>
        </Row>
      </Container>
      </section>

        <section className="destinationCard mx-2">
        <Container>
          <Row>
            <Col>
              <Card style={{ width: '16rem' }}>
                <Card.Img variant="top" src={Dedrarium} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>


    </>
  )
};
