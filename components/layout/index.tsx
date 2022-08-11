import { FC, ReactNode } from 'react'

import { Flex } from '@chakra-ui/react'

import Navbar from '../Navbar'

interface Props {
    children: ReactNode;
}

const Layout : FC<Props> = ({ children }) => {

    return (
        <Flex
            minHeight='100vh'
            direction='column'
            position='relative'
            background='linear-gradient(180deg, #05192E 0%, #084F84 92.52%)'
        >
            <Navbar />
            <Flex
                minH='100vh'
                backgroundImage='url(https://media.realvision.com/wp/20220512150452/hero_left_right_ornaments_.png)'
                background-position='top center'
                background-repeat='no-repeat'
                background-size='auto'
            >
                { children }
            </Flex>
            
        </Flex>
    )
}

export default Layout