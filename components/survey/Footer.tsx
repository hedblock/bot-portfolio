import React from 'react'

import { HStack, Text } from '@chakra-ui/react'

interface Props {
    allocationsSum: number
}

const FooterRow : React.FC<Props> = ({ allocationsSum }) => {
  return (
    <HStack 
        w='100%'
        justifyContent='flex-end'
    >
        <Text
            fontWeight='bold'
        >
           Total: {allocationsSum}%
        </Text>
    </HStack>
  )
}

export default FooterRow