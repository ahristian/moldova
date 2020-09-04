import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const DestinationCard = (props) => {
  const {destination} = props
  return (
    <>

      <a href={destination.destinationId}>
      <Card className="destinationCardElement mx-3 my-3"  >
        <Card.Body>
          <img src={destination.destinationImage}  alt={destination.destinationTitle}/>
          <Card.Title className="text-center">
            {destination.destinationTitle}
          </Card.Title>
        </Card.Body>
      </Card>
      </a>
    </>
  )
}
