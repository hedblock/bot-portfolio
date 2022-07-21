import React from 'react'

import { VStack, Text } from '@chakra-ui/react'

import useResults from '../../hooks/useResults'

import Top10Allocations from './Top10Allocations'
import AllocationGrid from './AllocationGrid'

const ResultsComponent = () => {

    const { currentResults } = useResults();

    return (
        <VStack
            width='100%'
            spacing={8}
        >
            <Text
                fontSize="2xl"
                fontWeight="bold"
            >
                Weekly Results
            </Text>
            <Top10Allocations 
                results={currentResults}
            />
            <AllocationGrid
                results={currentResults}
            />
        </VStack>
    )
}

export default ResultsComponent