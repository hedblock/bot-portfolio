import { FC, ReactNode } from 'react'

import { Container, VStack, CircularProgress } from '@chakra-ui/react'

import AdminUnathorized from './AdminUnauthorized';
import NotConnected from './NotConnected';
import TokenUnauthorized from './TokenUnauthorized';
import WrongChain from './WrongChain';

import useAuth from '../../hooks/useAuth'

import { navbarHeight } from '../Navbar'

interface Props {
    children: ReactNode
    tokenGated?: boolean
    adminGated?: boolean
}

const PageContainer : FC<Props> = ({ children, tokenGated, adminGated}) => {

    const { account, loading, adminAuth, tokenAuth, wrongChain } = useAuth();

    return (
        <Container
            flex={1}
            display='flex'
            flexDirection='column'
            py={navbarHeight}
            justifyContent='center'
        >
            {
                loading ? (
                    <VStack>
                        <CircularProgress 
                            isIndeterminate
                        />
                    </VStack>
                ) : (
                    account ? (
                        adminGated && !adminAuth ? (
                            <AdminUnathorized />
                        ) : (
                            tokenGated ? (
                                wrongChain ? (
                                    <WrongChain />
                                ) : (
                                    !tokenAuth ? (
                                        <TokenUnauthorized />
                                    ) : (
                                        children
                                    )
                                )
                            ) : (
                                children
                            )
                        )
                    ) : (
                        <NotConnected />
                    )
                )
                
        }
        </Container>
    )
}

export default PageContainer