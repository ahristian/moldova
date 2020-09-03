
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllDestinations } from '../store/destination'
import { fetchDestinationPhotosByDestinationId } from '../store/destinationPhoto'
import { DestinationElement } from '../ui/DestinationElement'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export const  SinglePage = ({match}) => {
  const dispatch = useDispatch()
  const effects = () => {
    dispatch(fetchDestinationPhotosByDestinationId('81694c3c-872a-4d9b-9e88-2b17f2ed66d4'))
  };
  const destination = useSelector(state => (
    state.destinations
      ? state.destinations.find(destination => destination.destinationId === match.params.destinationId)
      : []
  ));
  const inputs = [];
  useEffect(effects, inputs);
  const destinationPhotos = useSelector(state => {
    return state.destinationPhotos ? state.destinationPhotos : []
  });
  console.table(destinationPhotos)
  return (
    <>
      <Container>
        <Row>
        {destinationPhotos.map(destinationPhoto => <DestinationElement destinationPhoto={destinationPhoto}/>)}
        </Row>
        </Container>
      <Container>
        <Row>
          {/*{park && (<ParkDetail park = {park}/>)}*/}
        </Row>
      </Container>
    </>
  )
}

