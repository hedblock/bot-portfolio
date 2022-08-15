import React from 'react'

import {
  VStack,
  Heading,
  Text,
} from '@chakra-ui/react'

const NotConnected = () => {

  return (
    <VStack spacing={1}>
      <Heading>
        Not Authenticated
      </Heading>
      <Text 
        variant='body1' 
        align='center'
      >
          You must connect your wallet and sign the terms and conditions to view this page.
      </Text>
    </VStack>
  )
}

export default NotConnected