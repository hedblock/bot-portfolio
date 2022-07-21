import React from 'react';

import { Text, VStack } from '@chakra-ui/react';

import HeaderRow from './HeaderRow';
import AllocationRow from './AllocationRow';

import { Allocation } from '../../hooks/useResults';


interface Props {
    results: Allocation[],
}

const AllocationGrid : React.FC<Props> = ({ results }) => {

    return (
        <VStack
            spacing={2}
            width='100%'
        >
            <Text
                fontWeight='bold'
                fontSize='xl'
            >
                All Allocations
            </Text>
            <VStack
                width='100%'
            >
                <HeaderRow />
                {
                    results.map(allocation => (
                        <AllocationRow
                            key={allocation.symbol}
                            allocation={allocation}
                        />
                    ))
                }
            </VStack>
        </VStack>
    )
}

export default AllocationGrid;