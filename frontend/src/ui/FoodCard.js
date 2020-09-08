import React from 'react'
import Popup from "reactjs-popup"
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap'


export const FoodCard = (props) => {
  const {food} = props

  return (
    <>
      <Card className="foodCardElement mx-3 my-3" style={{width: '25rem'}} >
        <Popup
          trigger={<Button variant="outline-light"><img src={food.foodImageUrl} alt={food.foodTitle}/></Button> }
          modal closeOnDocumentClick>
          <img style={{height: "40vw", object: "cover"}} alt={food.foodTitle} src={food.foodImageUrl}/>
        </Popup>
        <Card.Body>
          <Card.Title className="text-center">
            {food.foodTitle}
          </Card.Title>
            <Card.Text>
              {food.foodContent}
          </Card.Text>
        </Card.Body>
      </Card>

    </>
  )
}
