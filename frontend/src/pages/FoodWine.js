import React from "react"
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import mamliga from '../shared/images/mamaliga.jpg'

export const FoodWine = () => {
  return (
    <>
      <section className="food">
        <Container>
          <Row>
            <Col>
              <h1>The Traditional Food in Moldova</h1>
              <p>Moldovan food is influenced by both the Romanian influence and the Russian influence, and clearly the
                closer you get to the borders with one or the other state and the more gastronomic affinities come to
                the surface.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="foodCard">
        <Container>
          <Row>
            <Col>
              <Card style={{width: '16rem'}}>
                <Card.Img variant="top" src={mamliga}/>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Food name mamaliga.
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