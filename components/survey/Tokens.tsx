import React from 'react';

import { VStack } from '@chakra-ui/react';

import HeaderRow from './HeaderRow';
import TokenRow from './TokenRow/index';
import FooterRow from './Footer';

import { Token } from '../../hooks/useTokens';

interface Props {
    tokens: Token[],
    allocations: number[],
    allocationsSum: number,
    updateAllocation: (index: number, allocation: number) => void,
    setEqualAllocations: () => void,
    invalidAllocations: boolean,
    submitAllocations: () => void
}

const Tokens : React.FC<Props> = ({ tokens, allocations, updateAllocation, setEqualAllocations, allocationsSum, invalidAllocations, submitAllocations }) => {

    return (
        <VStack
            spacing={2}
            w='100%'
        > 
            <HeaderRow />
            {
                tokens.map((token, index) => (
                    <TokenRow
                        key={token.symbol}
                        token={token}
                        allocation={allocations[index]}
                        updateAllocation={(allocation) => updateAllocation(index, allocation)}
                    />
                ))
            }
            <FooterRow 
                allocationsSum={allocationsSum}
                setEqualAllocations={setEqualAllocations}
                invalidAllocations={invalidAllocations}
                submitAllocations={submitAllocations}
            />
        </VStack>
    )
}

export default Tokens;