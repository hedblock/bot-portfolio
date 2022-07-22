import React from 'react'

import { VStack, HStack } from '@chakra-ui/react'

import TokenDisplay from '../utilities/TokenDisplay';
import AllocationDisplay from './AllocationDisplay';

import { Allocation } from '../../hooks/useResults';

interface Props {
    allocation: Allocation
}

const AllocationRow : React.FC<Props> = ({ allocation }) => {

    return (
        <HStack
            width='100%'
            borderBottom='0.5px solid'
            py={'1rem'}
        >
           <TokenDisplay
                token={allocation}
            />
            <AllocationDisplay
                allocation={allocation.allocation}
                change={allocation.change}
            />
        </HStack>
    )
}

export default AllocationRow