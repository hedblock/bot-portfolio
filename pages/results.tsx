import React from 'react'

import type { NextPage } from 'next'

import ResultsComponent from '../components/results'
import PageContainer from '../components/utilities/PageContainer'

const Results : NextPage = () => {

  return (
    <PageContainer>
      <ResultsComponent />
    </PageContainer>
  )
}

export default Results