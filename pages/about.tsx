import React from 'react'

import { NextPage } from 'next'

import PageContainer from '../components/utilities/PageContainer'
import AboutComponent from '../components/about'

const About : NextPage = () => {
  return (
    <PageContainer
      connectionGated={false}
    >
        <AboutComponent />
    </PageContainer>
  )
}

export default About