import React, { useEffect } from "react"
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useDispatch, useSelector } from 'react-redux'
import {  fetchProfileById } from '../store/profile'
import { fetchSaveByProfileId } from '../store/saved'
import { ProfileCard } from './ProfileCard'
import { DestinationElement } from './DestinationElement'

export const Profile = ({match}) => {
  const dispatch = useDispatch()
  const sideEffects = () => {
    dispatch(fetchProfileById(match.params.profileId))
    dispatch(fetchSaveByProfileId(match.params.profileId))
  }

  const inputs = [match.params.destinationId];
  useEffect(sideEffects, inputs);

  const profile = useSelector(state => state.profile ? state.profile : []);
  const save = useSelector( state => state.save ? state.save : []);

  console.table(save)
  return (
    <>
      <section className="profile">
        <Container>
          <Row>
            <Col>
              {profile && (<h2 className="display-4 text-center">Hello, {profile[0]?.profileUserName}</h2>)}
            </Col>
          </Row>
          <Row>
            <Col>
              {profile && (<p>Your email: {profile[0]?.profileEmail}</p>)}
            </Col>
          </Row>
          <Row>
            <Col>
              <p> Your saved destinations in Moldova are:</p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="profileDestinationCard mx-2">
        <Container>
          <Row md={2} className="justify-content-center">
            {save.map(save => <ProfileCard save={save} key={save.saveDestinationId}/>)}
          </Row>
        </Container>
      </section>
    </>
  )
};
