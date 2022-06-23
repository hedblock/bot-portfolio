import React from 'react'

import useAuth from '../../hooks/useAuth';

import { default as MUIContainer } from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Connect from './Connect';
import TokenUnauthorized from './TokenUnauthorized';
import AdminUnathorized from './AdminUnauthorized';
import NotConnected from './NotConnected';

interface Props {
    children: React.ReactNode;
    title: string;
    tokenGated?: boolean;
    adminGated?: boolean;
}

const Container : React.FC<Props> = ({ children, title, tokenGated, adminGated }) => {

    const { account, tokenAuth, adminAuth } = useAuth();

    return (
        <MUIContainer sx={{py: 4}}>
            <Stack direction='row' justifyContent='flex-end'>
                <Connect />
            </Stack>
            <Stack alignItems='center' spacing={4}>
                <Typography variant='h6' align='center' color='text.primary'>{title}</Typography>
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
            </Stack>
        </MUIContainer>
    )
}

export default Container