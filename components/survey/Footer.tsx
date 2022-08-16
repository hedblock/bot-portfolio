import React from 'react'

import { HStack, VStack, Text, Button, Flex } from '@chakra-ui/react'
import SubmitButton from './SubmitButton';

interface Props {
    allocationsSum: number;
    setEqualAllocations: () => void;
    invalidAllocations: boolean,
    submitAllocations: () => void
}

const FooterRow : React.FC<Props> = ({ allocationsSum, setEqualAllocations, invalidAllocations, submitAllocations }) => {
  return (
    <VStack
      w='100%'
      position='sticky'
      bottom={1}
    >
      <HStack 
          w='100%'
          justifyContent='space-between'
      >
        <Button
          onClick={setEqualAllocations}
          bg='navy.700'
        >
          Set Equal Allocations
        </Button>
        <Flex
          bg='navy.700'
          h={10}
          alignItems='center'
          px={4}
          rounded='xl'
        >
          <Text
            fontWeight='bold'
          >
            Total: {allocationsSum}%
          </Text>
        </Flex>
      </HStack>
      <SubmitButton 
        invalidAllocations={invalidAllocations}
        submitAllocations={submitAllocations}
      />
    </VStack>
  )
}

export default FooterRow