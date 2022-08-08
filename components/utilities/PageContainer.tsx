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
    connectionGated?: boolean
}

const PageContainer : FC<Props> = ({ children, tokenGated, adminGated, connectionGated = true}) => {

    const { account, loading, adminAuth, tokenAuth, wrongChain } = useAuth();

    return (
        <Container
            flex={1}
            display='flex'
            flexDirection='column'
            py={'6rem'}
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
                    (connectionGated && !account) ? (
                        <NotConnected />
                    ) : (
                        (adminGated && !adminAuth) ? (
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
                    )
                )
                
        }
        </Container>
    )
}

export default PageContainer