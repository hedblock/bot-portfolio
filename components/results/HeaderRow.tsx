import React from 'react'

import { HStack, Text } from '@chakra-ui/react'

const HeaderRow : React.FC = () => (
    <HStack
        width='100%'
        spacing={2}
    >
        <Text
            fontWeight='bold'
            flex={1}
            align='center'
        >
            Token
        </Text>
        <Text
            fontWeight='bold'
            flex={1}
            align='center'
        >
            Allocation (Change)
        </Text>
    </HStack>
)

export default HeaderRow