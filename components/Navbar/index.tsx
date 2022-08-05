import { FC } from 'react';

import { useRouter } from 'next/router';

import {
  HStack,
  Text,
} from '@chakra-ui/react';

import NavLink from './NavLink';
import Wallet from './Wallet';

import routes from './routes';

export const navbarHeight = '4rem';

const Navbar : FC = () => {

    const router = useRouter()

    const isActive = (href: string) => {
        return router.pathname === href
    }

    return (
        <HStack
            h={navbarHeight}
            w='100%'
            position='fixed'
            justifyContent='space-between'
            px='1rem'
            zIndex={10}
        >
            <HStack
                spacing={8}
            >
                <Text
                    fontSize={'2xl'}
                    fontWeight={'bold'}
                >
                    RVPC Portfolio
                </Text>
                <HStack
                    as={'nav'}
                    spacing={4}
                    display={{ 
                        base: 'none', 
                        md: 'flex' 
                    }}
                >
                        {
                            routes.map(({ name, href }) => (
                                <NavLink 
                                    key={name}
                                    href={href}
                                    isActive={isActive(href)}
                                >
                                    {name}
                                </NavLink>
                            ))
                        }
                </HStack>
            </HStack>
            <HStack 
                direction={'row'} 
            >
                <Wallet />
            </HStack>
        </HStack>
    );
}

export default Navbar