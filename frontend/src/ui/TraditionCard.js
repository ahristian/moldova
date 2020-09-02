
import React from 'react'
import Popup from "reactjs-popup"
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'

export const TraditionCard = (props) => {
const {tradition} = props


  return (
    <>
      <Card className="traditionCardElement mx-3 my-3" style={{width: '25rem'}} >
        <Popup
          trigger={<a href="#"><img src={tradition.traditionImageUrl}/></a> }
          modal closeOnDocumentClick>
          <img style={{height: "40vw", object: "cover"}} src={tradition.traditionImageUrl}/>
        </Popup>
        <Card.Body>
          <Card.Title className="text-center">
            {tradition.traditionTitle}
          </Card.Title>
          <Card.Text>
            <p>{tradition.traditionContent}</p>
          </Card.Text>
        </Card.Body>
      </Card>

    </>
  )
}
