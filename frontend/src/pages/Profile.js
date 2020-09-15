import React, { useEffect } from "react"
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useDispatch, useSelector } from 'react-redux'
import { ProfileCard } from '../ui/ProfileCard'
import { fetchProfileById } from '../store/profile'

export const Profile = ({match}) => {
  const dispatch = useDispatch()
  const effects = () => {
    dispatch(fetchProfileById(match.params.profileId))
  }
  const inputs = [match.params.profileId];
  useEffect(effects, inputs);
  const profiles = useSelector(state => {
    return state.profile
      ? state.profile.find(profile => profile.profileId === match.params.profileId)
      : []
  });
  return (
    <>
      <section className="profile">
        <Container>
          <Row>
            <Col>
              <h1>Profile</h1>
            </Col>
          </Row>
          <Row>
            {profiles.map(profile => <ProfileCard profile={profile} key={profile.profileId}/>)}
          </Row>
        </Container>
      </section>
    </>
  )
};
