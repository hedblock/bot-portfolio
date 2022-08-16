import { FC } from 'react'

import { HStack, Text, Image, Link } from '@chakra-ui/react'

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
            <Link 
                href={`https://coinmarketcap.com/currencies/${token.slug}/`}
                isExternal
            >
                <Text
                    fontWeight='bold'
                    _hover={{
                        opacity: 0.5
                    }}
                >
                    {token.name}{'\t'}<Text as='span' opacity={0.8}>{token.symbol}</Text>
                </Text>
            </Link>
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