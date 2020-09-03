import React, { useEffect } from 'react'
import Popup from "reactjs-popup"
import Card from 'react-bootstrap/Card'

export const DestinationCard = (props) => {
  const {destination} = props
  return (
    <>
      <a href={destination.destinationId}>
      <Card className="destinationCardElement mx-3 my-3" style={{width: '25rem'}} >
        <Card.Body>
          <Card.Title className="text-center">
            {destination.destinationTitle}
          </Card.Title>
          <Card.Text>
            <p>{destination.destinationDescription}</p>
          </Card.Text>
        </Card.Body>
      </Card>
      </a>

    </>
  )
}
