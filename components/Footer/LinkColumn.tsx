import React from 'react'

import {
    Text,
    VStack
} from '@chakra-ui/react'

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
            fontSize='lg'
            color='black'
        >
            { title }
        </Text>
        {
            links.map((link, index) => (
                <a
                    key={index}
                    href={link.href}
                >
                    <Text 
                        color='black'
                    >
                        { link.name }
                    </Text>
                </a>
            ))
        }
    </VStack>
  )
}

export default LinkColumn