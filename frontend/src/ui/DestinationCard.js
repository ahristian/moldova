import React from 'react'
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'
import { getAllDestinations } from '../store/destination'
import {httpConfig} from "../utils/httpConfig"
import Button from 'react-bootstrap/Button'
import { useDispatch } from 'react-redux'

export const DestinationCard = (props) => {
  const {destination} = props
  const dispatch = useDispatch()
  const clickLike = () => {
    httpConfig.post("/apis/save/", {saveDestinationId: destination.destinationId})
      .then(reply => {
          let {message, type} = reply
          if(reply.status === 200) {
            console.log(reply)
            dispatch(getAllDestinations(props))
          }
          console.log(reply)
        }
      );
  }
  return (
    <>
      <Nav.Link href={`/destinations/${destination?.destinationId}`}>
      <Card className="destinationCardElement mx-3 my-3"  >
          <img src={destination.destinationImage}  alt={destination.destinationTitle}/>
        <Card.Body>
        <Card.Title className="destination-title">
            {destination.destinationTitle}
         </Card.Title>
          <Button onClick={clickLike} className="buttonSave">Save</Button>
        </Card.Body>
      </Card>
      </Nav.Link>
    </>
  )
}
