import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export const ProfileCard = (props) => {
  const {profile} = props

  return (
    <>
      <Container>
        <Row>
          <Col>
            {profile.destinationTitle}
          </Col>
        </Row>
      </Container>


    </>
  )
}
