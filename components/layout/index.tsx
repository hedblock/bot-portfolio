import { FC, ReactNode } from 'react'

import { Container, Flex } from '@chakra-ui/react'
import Navbar, { navbarHeight } from '../Navbar'

import useAuth from '../../hooks/useAuth';

import AdminUnathorized from '../utilities/AdminUnauthorized';
import NotConnected from '../utilities/NotConnected';
import TokenUnauthorized from '../utilities/TokenUnauthorized';

interface Props {
    children: ReactNode;
    tokenGated?: boolean;
    adminGated?: boolean;
}

const Layout : FC<Props> = ({ children, adminGated, tokenGated }) => {

    const { account, adminAuth, tokenAuth } = useAuth();

    return (
        <Flex
            minHeight='100vh'
            direction='column'
            position='relative'
        >
            <Navbar />
            <Container
                flex={1}
                display='flex'
                flexDirection='column'
                py={navbarHeight}
                justifyContent='center'
            >
                {
                    account ? (
                        adminGated && !adminAuth ? (
                            <AdminUnathorized />
                        ) : (
                            tokenGated && !tokenAuth ? (
                                <TokenUnauthorized />
                            ) : (
                                children
                            )
                        )
                    ) : (
                        <NotConnected />
                    )
            }
            </Container>
        </Flex>
    )
}

export default Layout