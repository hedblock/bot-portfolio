import type { NextPage } from 'next'

import SurveyComponent from '../components/survey'
import PageContainer from '../components/utilities/PageContainer'

const Home : NextPage = () => {
  return (
    <PageContainer
      tokenGated
      connectionGated
    >
      <SurveyComponent />
    </PageContainer>
  )
}

export default Home
