/*

import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import { useDispatch, useSelector } from 'react-redux'
import Container from 'react-bootstrap/Container'
import { DestinationElement } from './DestinationElement'
import { DestinationCard } from './DestinationCard'
import { fetchAllDestinations } from '../store/destination'
import { fetchAllDestinationsByDestinationId } from '../store/destinationByDestinationId'

export const DestinationById = ({match}) => {

  const dispatch = useDispatch()
  const sideEffects = () =>  {
    dispatch(fetchAllDestinationsByDestinationId())
  }
  React.useEffect(sideEffects, [])
  // Returns the the userPosts store from redux and assigns it to the userPosts variable.
  const destination = useSelector(state => (
    state.destinations
      ? state.destinations.find(destination => destination.destinationId === match.params.destinationId)
      : []
  ));

  return (
    <>
      <Container>
        <Card className="destinationCardElement mx-3 my-3" style={{width: '25rem'}}>
          <Card.Body>
           {/!* {destinations.map(destination => <DestinationElement destination={destination}/>)}*!/}
            {destination && (<DestinationElement destination = {destination}/>)}
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}
*/
