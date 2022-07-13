import React from 'react'

import type { NextPage } from 'next'

import Container from '../components/utilities/Container'
import ResultsComponent from '../components/results'

const Results : NextPage = () => {

  return (
    <Container 
      title='Weekly Results'
      tokenGated
    >
      <ResultsComponent />
    </Container>
  )
}

export default Results