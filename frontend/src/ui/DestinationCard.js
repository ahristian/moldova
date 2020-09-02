
import React from 'react'
import Popup from "reactjs-popup"
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'

export const DestinationCard = (props) => {
const {destination} = props


  return (
    <>
      <Card className="destinationCardElement mx-3 my-3" style={{ width: '16rem'}}>

        <Image
          src={process.env.PUBLIC_URL + '/asconi1.jpg'}/>
        <Card.Body>
          <Card.Title>
            {destination.destinationTitle}
          </Card.Title>

        </Card.Body>
      </Card>

    </>
      )
}
