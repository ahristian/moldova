import React, { useEffect } from 'react'
import Popup from "reactjs-popup"
import Card from 'react-bootstrap/Card'

export const  DestinationElement= (props) => {
  const {destinationPhoto} = props
  return (
    <>
        <Card className="destinationCardElement mx-2 my-5" style={{width: '14rem'}} >
          <Card.Body>
               <img src={`${destinationPhoto.destinationPhotoUrl}`}
                alt={destinationPhoto.destinationTitle} className="img-fluid" />
          </Card.Body>
        </Card>

    </>
  )
}
