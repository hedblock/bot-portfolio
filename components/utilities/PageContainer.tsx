import { FC, ReactNode } from 'react'

import { Container, VStack, CircularProgress } from '@chakra-ui/react'

import AdminUnathorized from './AdminUnauthorized';
import NotConnected from './NotConnected';
import TokenUnauthorized from './TokenUnauthorized';


import useAuth from '../../hooks/useAuth'

import { navbarHeight } from '../Navbar'

interface Props {
    children: ReactNode
    tokenGated?: boolean
    adminGated?: boolean
}

const PageContainer : FC<Props> = ({ children, tokenGated, adminGated}) => {

    const { account, loading, adminAuth, tokenAuth } = useAuth();

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
                            tokenGated && !tokenAuth ? (
                                <TokenUnauthorized />
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