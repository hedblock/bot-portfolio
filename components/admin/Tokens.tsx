import React from 'react'

import { Wrap, Text, VStack } from '@chakra-ui/react';

import TokenDisplay from './TokenDisplay';

import { Token } from '../../hooks/useAdmin';

interface Props {
    tokens: Token[];
    removeToken: (symbol: Token) => void;
}

const Tokens : React.FC<Props> = ({ tokens, removeToken }) => {

    const areTokensAdded = tokens.length > 0;

    return (
        <VStack>
            <Text
                fontWeight='bold'
                fontSize='xl'
            >
                {areTokensAdded ? "Tokens" : "No Tokens Added"}
            </Text>
            {
                areTokensAdded ? (
                    <Wrap 
                        justify='center' 
                        align='center' 
                        spacing={2}
                    >
                        {
                            tokens.map(token => (
                                <TokenDisplay 
                                    key={token.symbol} 
                                    token={token} 
                                    removeToken={removeToken} 
                                />
                            ))
                        }
                    </Wrap>
                ) : (
                    <Text>
                        Input the symbol of the token you want to add.
                    </Text>
                )
            }
        </VStack>
    )
}

export default Tokens