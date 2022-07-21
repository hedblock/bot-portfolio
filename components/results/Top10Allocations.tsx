import React from 'react'

import {
    VStack,
    Text
} from '@chakra-ui/react'

import BarChart from './BarChart'

interface Allocation {
    symbol: string;
    allocation: number;
}

interface Props {
    results: Allocation[]
}

const Top10Allocations : React.FC<Props> = ({ results }) => {

    const numAllocations = 10;

    return (
        <VStack
            width='100%'
        >
            <Text
                fontSize='xl'
                fontWeight='bold'
            >
                Top Allocations
            </Text>
            <BarChart 
                data={results.slice(0, numAllocations).map(allocation => allocation.allocation)}
                labels={results.slice(0, numAllocations).map(allocation => allocation.symbol)}
            />
        </VStack>
    )
}

export default Top10Allocations