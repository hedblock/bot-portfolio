import React from 'react'

import { HStack, Text, Button } from '@chakra-ui/react'

interface Props {
    allocationsSum: number;
    setEqualAllocations: () => void;
}

const FooterRow : React.FC<Props> = ({ allocationsSum, setEqualAllocations }) => {
  return (
    <HStack 
        w='100%'
        justifyContent='space-between'
    >
      <Button
        onClick={setEqualAllocations}
      >
        Set Equal Allocations
      </Button>
      <Text
          fontWeight='bold'
      >
          Total: {allocationsSum}%
      </Text>
    </HStack>
  )
}

export default FooterRow