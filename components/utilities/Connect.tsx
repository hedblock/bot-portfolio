import React, { useEffect } from 'react'

import Button from '@mui/material/Button';

import { useMoralis } from 'react-moralis';

import { getEllipsisTxt } from '../../services/utils';

const Connect = () => {

    const { enableWeb3, isWeb3Enabled, isAuthenticated, account } = useMoralis();

    useEffect(() => {
        const provider = window.localStorage.getItem('provider');
        if(!isWeb3Enabled && provider && provider === 'metamask') {
            enableWeb3({provider});
        }
    }, [isWeb3Enabled, enableWeb3]);

    const handleConnect = async () => {
        await enableWeb3();
        window.localStorage.setItem('provider', 'metamask');
    }

    return (
        <Button 
            onClick={handleConnect} 
            variant={account ? 'outlined' : 'contained'}
        >
            {account ? getEllipsisTxt(account) : 'Connect'}
        </Button>
    )
}

export default Connect