import { FC } from 'react'

import { HStack, Text, Image } from '@chakra-ui/react'

import TokenSymbol from './TokenSymbol'

import { round2 } from '../../services/utils';

import { Token } from '../../hooks/useTokens';

interface Props {
    token: Token;
}

const TokenDisplay : FC<Props> = ({ token }) => {
  return (
    <HStack
        flex={1}
        spacing={4}
    >
        <HStack
            spacing={4}
        >
            <Image
                alt='Token Logo'
                src={token.logo}
                h='30px'
                w='30px'
                rounded='full'
            />
            <HStack>
                <Text
                    fontWeight='bold'
                >
                    {token.name}
                </Text>
                <TokenSymbol 
                    symbol={token.symbol}
                    slug={token.slug}
                />
            </HStack>
        </HStack>
        <HStack>
            <Text>
                ${round2(token.price).toLocaleString()}
            </Text>
        </HStack>
    </HStack>
  )
}

export default TokenDisplay