import React from 'react'

import { HStack, Text, Button, Flex } from '@chakra-ui/react'

interface Props {
    allocationsSum: number;
    setEqualAllocations: () => void;
}

const FooterRow : React.FC<Props> = ({ allocationsSum, setEqualAllocations }) => {
  return (
    <HStack 
        w='100%'
        justifyContent='space-between'
        position='sticky'
        bottom={1}
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
  )
}

export default FooterRow