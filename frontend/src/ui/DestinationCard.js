import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'
import { getAllDestinations } from '../store/destination'
import {httpConfig} from "../utils/httpConfig"
import Button from 'react-bootstrap/Button'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import { SignInForm } from '../shared/components/sign-in/SignInForm'
import Alert from 'react-bootstrap/Alert'

export const DestinationCard = ({destination}) => {
  const dispatch = useDispatch()

  const clickLike = () => {

    httpConfig.post("/apis/save/", {saveDestinationId: destination.destinationId})
      .then(reply => {
          let {message, type} = reply
          if(reply.status === 200) {
            dispatch(getAllDestinations())
          }
        let info = reply.message
        if (info === "Please Log in")
        alert(` ${info}`);
          }
      )

  }

  return (
    <>

      <Card className="destinationCardElement mx-3 my-3"  >
        <Link to={`/destinations/${destination?.destinationId}`}>
          <img src={destination.destinationImage}  alt={destination.destinationTitle}/>
        </Link>
        <Card.Body>
        <Card.Title className="destination-title">
            {destination.destinationTitle}
         </Card.Title>
        </Card.Body>
          <Button onClick={clickLike} className="buttonSave">Save </Button>
      </Card>


    </>
  )
}
