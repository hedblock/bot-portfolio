import { ReactNode, FC } from 'react';

import { useRouter } from 'next/router';

import {
  Box,
  Link,
  Button,
  HStack,
  useColorModeValue,
  useColorMode,
  Text,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

import Wallet from './Wallet';


interface NavLinkProps {
    children: ReactNode;
    href: string;
    isActive?: boolean;
}

const NavLink : FC<NavLinkProps> = ({ children, href, isActive }) => {
    const activeBg = useColorModeValue('gray.200', 'gray.700')
    return (
        <Link
            px={2}
            py={1}
            rounded={'md'}
            bg={isActive ? activeBg : 'transparent'}
            _hover={{
            textDecoration: 'none',
            bg: activeBg,
            }}
            href={href}
        >
            {children}
        </Link>
    )
};

const routes = [
    {
        name: 'Vote',
        href: '/',
    },
    {
        name: 'Results',
        href: '/results',
    },
    {
        name: 'About',
        href: '/about',
    },
]

export const navbarHeight = '4rem';

const Navbar = () => {

    const router = useRouter()

    const { colorMode, toggleColorMode } = useColorMode();

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
                <Button 
                    onClick={toggleColorMode}
                >
                    {
                        colorMode === 'light' ? (
                            <MoonIcon />
                        ) : (
                            <SunIcon />
                        )
                    }
                </Button>
                <Wallet />
            </HStack>
        </HStack>
    );
}

export default Navbar