import React from 'react'

import { NextPage } from 'next'
import PageContainer from '../components/utilities/PageContainer'
import Disclaimer from '../components/disclaimer'

const DisclaimerPage : NextPage = () => {
  return (
    <PageContainer>
        <Disclaimer />
    </PageContainer>
  )
}

export default DisclaimerPage