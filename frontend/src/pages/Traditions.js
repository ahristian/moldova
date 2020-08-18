import React from "react"
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import martisor from '../shared/images/martisor.jpg'

export const Traditions = () => {
  return (
    <>
      <section className="tradition">
        <Container>
          <Row>
            <Col>
              <h1>The Traditions in Moldova</h1>
              <p>Moldavian holidays and customs are marked by the values inherited from our ancestors, which consolidate
                the Moldavian nation and contribute to its self-identity. They include both social and religious
                orthodox festivals like Easter, Christmas, New Year, Women`s Day and Martisor.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="traditionCard">
        <Container>
          <Row>
            <Col>
              <Card style={{ width:'16rem' }}>
                <Card.Img variant="top" src={martisor}/>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Martisor
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
