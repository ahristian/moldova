import React from 'react'
import Card from 'react-bootstrap/Card'

export const DestinationCard = (props) => {
  const {destination} = props
  return (
    <>

      <a href={destination.destinationId}>
      <Card className="destinationCardElement mx-3 my-3"  >
        <Card.Body>
          <img src={destination.destinationImage}  alt={destination.destinationTitle}/>
          <Card.Title className="destination-title">
            {destination.destinationTitle}
          </Card.Title>
        </Card.Body>
      </Card>
      </a>
    </>
  )
}
