
import React from 'react'
import Popup from "reactjs-popup"
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'

export const DestinationCard = (props) => {
const {destination} = props


  return (
    <>
      <Card className="destinationCardElement mx-3 my-3" style={{width: '25rem'}} >
        <Popup
          trigger={<a href="#"><img src={destination.destinationImageUrl}/></a> }
          modal closeOnDocumentClick>
          <img style={{height: "40vw", object: "cover"}} src={destination.destinationImageUrl}/>
        </Popup>
        <Card.Body>
          <Card.Title className="text-center">
            {destination.destinationTitle}
          </Card.Title>
        </Card.Body>
      </Card>

    </>
      )
}
