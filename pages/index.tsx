import React from 'react';

import type { NextPage } from 'next'

import Container from '../components/utilities/Container';
import SurveyComponent from '../components/survey'

const Home : NextPage = () => {
  return (
    <Container 
      title='Rebalance Portfolio'
      tokenGated
    >
      <SurveyComponent />
    </Container>
  )
}

export default Home
