import React from 'react'

import {
    Text,
    VStack
} from '@chakra-ui/react'
import Link from 'next/link';

interface Link {
    name: string;
    href: string;
}

interface Props {
    title: string;
    links: Link[];
}

const LinkColumn : React.FC<Props> = ({ title, links}) => {
  return (
    <VStack
        alignItems='flex-start'
        flex={1}
    >
        <Text
            fontWeight='bold'
            color='black'
            fontSize='16px'
        >
            { title }
        </Text>
        {
            links.map((link) => (
                link.href.includes('http') ? (
                    <a
                        key={link.href}
                        href={link.href}
                        target='_blank'
                    >
                        <Text 
                            color='black'
                            fontSize='16px'
                        >
                            { link.name }
                        </Text>
                    </a>
                ) : (
                    <Link
                        key={link.href}
                        href={link.href}
                        passHref
                    >
                        <Text 
                            color='black'
                            fontSize='16px'
                        >
                            { link.name }
                        </Text>
                    </Link>
                )
                
            ))
        }
    </VStack>
  )
}

export default LinkColumn