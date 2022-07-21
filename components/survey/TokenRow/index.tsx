import React from 'react'

import {
    HStack
} from '@chakra-ui/react';

import TokenDisplay from '../../utilities/TokenDisplay';
import AllocationInput from './AllocationInput';

import { Token } from '../../../hooks/useTokens';

interface Props {
    token: Token,
    allocation: number,
    updateAllocation: (allocation: number) => void;
}

const TokenRow : React.FC<Props> = ({ token, allocation, updateAllocation }) => {

    return (
        <HStack
            width='100%'
            borderBottom='0.5px solid'
            py={'1rem'}
        >
            <TokenDisplay 
                token={token}
            />
            <HStack
                flex={1}
            >
                <AllocationInput 
                    allocation={allocation}
                    updateAllocation={updateAllocation}
                />
            </HStack>
        </HStack>
    )
}

export default TokenRow