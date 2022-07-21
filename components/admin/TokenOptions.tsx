import React from 'react'

import TokenOption from './TokenOption';

import { Token } from '../../hooks/useAdmin';
import { HStack, VStack, Text } from '@chakra-ui/react';

interface Props {
    addOptions: Token[];
    selectOption: (token: Token) => void;
}

const TokenOptions : React.FC<Props> = ({ addOptions, selectOption }) => {
  return (
    <VStack
        spacing={4}
    >
        <Text
            fontWeight='bold'
            fontSize='lg'
        >
            Select an Option
        </Text>
        <HStack 
            spacing={2}
            align='flex-start'
        >
            {
                addOptions.map((option, index) => (
                    <TokenOption
                        key={index}
                        tokenOption={option}
                        selectOption={() => selectOption(option)}
                    />
                ))
            }
        </HStack>
    </VStack>
  )
}

export default TokenOptions