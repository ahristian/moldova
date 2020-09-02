import React from 'react'
import Popup from "reactjs-popup"
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import martisor from '../shared/images/martisor.jpg'
import mamaliga from '../shared/images/mamaliga.jpg'

export const FoodCard = (props) => {
  const {food} = props

  return (
    <>
      <Card className="foodCardElement mx-3 my-3" style={{width: '25rem'}} >
        <Popup
          trigger={<a href="#"><img src={food.foodImageUrl}/></a> }
          modal closeOnDocumentClick>
          <img style={{height: "40vw", object: "cover"}} src={food.foodImageUrl}/>
        </Popup>
        <Card.Body>
          <Card.Title className="text-center">
            {food.foodTitle}
          </Card.Title>
            <Card.Text>
              <p>{food.foodContent}</p>
          </Card.Text>
        </Card.Body>
      </Card>

    </>
  )
}
