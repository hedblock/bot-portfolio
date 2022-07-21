import React from 'react'

import { VStack, Text } from '@chakra-ui/react';

import { TokenData } from '../../pages/api/token';
import Card from '../utilities/Card';

interface Props {
    tokenOption: TokenData,
    selectOption: () => void
}

const TokenOption : React.FC<Props> = ({ tokenOption, selectOption }) => {

  return (
    <Card
        onClick={selectOption}
        _hover={{
            cursor: 'pointer',
            opacity: 0.6
        }}
    >
        <VStack
            spacing={0}
        >
            <Text 
                variant='body1'
                align='center'
            >
                {tokenOption.name}
            </Text>
            <Text 
                variant='caption'
            >
                {tokenOption.symbol}
            </Text>
        </VStack>
    </Card>
  )
}

export default TokenOption