import React, { useEffect } from 'react'
import Popup from "reactjs-popup"
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'


export const  DestinationElement= (props) => {
  const {destinationPhoto} = props
  return (
    <>
      <div className="destinationEach mx-1 my-3">

      <Popup
        trigger={<a href="#">
          <img className="destinationEachImage"  src={destinationPhoto.destinationPhotoUrl}
                                  alt={destinationPhoto.destinationTitle}/></a> }
        modal closeOnDocumentClick>
        <img className="image d-block w-100" src={destinationPhoto.destinationPhotoUrl}  alt={destinationPhoto.destinationTitle}/>
      </Popup>

        </div>

    </>
  )
}
