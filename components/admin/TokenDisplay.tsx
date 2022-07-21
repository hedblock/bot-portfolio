import React from 'react'

import { HStack, WrapItem, VStack, Text, IconButton, Image } from '@chakra-ui/react';

import { MdCancel } from 'react-icons/md'

import TokenSymbol from '../utilities/TokenSymbol';
import Card from '../utilities/Card';

import { Token } from '../../hooks/useAdmin';

interface Props {
    token: Token,
    removeToken: (symbol: Token) => void
}

const TokenDisplay : React.FC<Props> = ({ token, removeToken }) => {

    return (
        <WrapItem
            p='0.5rem'
        >
            <Card>
                <HStack 
                    spacing={4} 
                    justifyContent='center' 
                >
                    <Image 
                        alt={token.symbol}
                        src={token.logo}
                        height='30px'
                        width='30px'
                        rounded='full'
                    />
                    <VStack
                        spacing={0}
                    >
                        <Text
                            fontWeight='bold'
                            fontSize='lg'
                        >
                            {token.name}
                        </Text>
                        <TokenSymbol
                            symbol={token.symbol}
                            slug={token.slug}
                        />
                    </VStack>
                    <IconButton
                        aria-label='Remove Token'
                        onClick={() => removeToken(token)}
                    >
                        <MdCancel />
                    </IconButton>
                </HStack>
            </Card>
        </WrapItem>
    )
}

export default TokenDisplay