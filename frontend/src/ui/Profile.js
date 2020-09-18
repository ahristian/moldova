import React, { useEffect } from "react"
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useDispatch, useSelector } from 'react-redux'
import { ProfileCard } from './ProfileCard'
import { fetchProfileById } from '../store/profile'
import { fetchAllDestinations } from '../store/destination'
import { fetchAllFoods } from '../store/food'
import { fetchDestinationProfile } from '../store/destinationByProfileId'

export const Profile = () => {
  const dispatch = useDispatch()
  const sideEffects = () =>  {
    dispatch(fetchProfileById())
   /* dispatch(fetchDestinationProfile())*/
  }
  React.useEffect(sideEffects, [])
  const profile = useSelector(state => state.profile ? state.profile : []);
 /* const destinationsProfile = useSelector(state => state.destinationsProfile ? state.destinationsProfile : []);


  console.log(destinationsProfile)*/
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
          <Row>
          {/*{destinationsProfile.map(destinationsProfile => <ProfileCard destinationsProfile={destinationsProfile} key={profile.profileId}/>)}
        */}  </Row>
        </Container>
      </section>
    </>
  )
};
