import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

export const DestinationCard = (props) => {
  const {destination} = props
  return (
    <>
      <Link to={`/destinations/${destination?.destinationId}`}>
      <Card className="destinationCardElement mx-3 my-3"  >
          <img src={destination.destinationImage}  alt={destination.destinationTitle}/>
        <Card.Body>

        <Card.Title className="destination-title">
            {destination.destinationTitle}
          </Card.Title>
        </Card.Body>
      </Card>
      </Link>
    </>
  )
}
