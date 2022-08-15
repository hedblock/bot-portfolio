import { useState, useEffect } from 'react';

import { BigNumber } from '@ethersproject/bignumber';

import { Moralis } from 'moralis';
import { useMoralis, useWeb3ExecuteFunction, useChain } from 'react-moralis';

interface Connector {
    title: string;
    connectorId: Moralis.Web3ProviderType;
}

export const connectors : Connector[] = [
    {
        title: "Metamask",
        connectorId: "metamask",
    }
]

const useAuth = () => {

    const [loading, setLoading] = useState(true);
    const { 
        account, 
        isAuthenticated, 
        isWeb3Enabled, 
        isWeb3EnableLoading, 
        enableWeb3,
        deactivateWeb3,
        authenticate, 
        logout
    } = useMoralis();
    const { chainId } = useChain();

    useEffect(() => {
        const checkWeb3 = async () => {
            const connectorId = window.localStorage.getItem("connectorId");
            if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading && connectorId) {
                await enableWeb3({ provider: connectorId as Moralis.Web3ProviderType });
            }
            setLoading(false);
        }
        checkWeb3();
    }, [account, isWeb3Enabled, enableWeb3]);

    const connect = async (connectorId : Moralis.Web3ProviderType) => {
        if (!isWeb3Enabled) {
            const user = await authenticate({ 
                provider: connectorId,
                signingMessage: "Welcome to the RVPC Bot Portfolio! \n\nClick to sign in and accept the terms of service (LINK HERE). This request will not trigger a blockchain transaction or cost any gas fees. "
            });
            if (!user) {
                await deactivateWeb3();
            }
            window.localStorage.setItem("connectorId", connectorId);
        }
    }

    const disconnect = async () => {
        if(isWeb3Enabled){
            await logout();
            window.localStorage.removeItem("connectorId")
        }
    }

    // fetch RVPC NFT balance of current account 
    const { data, error, fetch } = useWeb3ExecuteFunction({
        abi: [{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}],
        contractAddress: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as string,
        functionName: "balanceOf",
        params: {owner: account},
    });

    // fetch balance whenever account changes
    useEffect(() => {
        fetch();
    }, [account, fetch, chainId]);

    return {
        tokenAuth: data instanceof BigNumber && !data.isZero(),
        // adminAuth: account && process.env.NEXT_PUBLIC_ADMIN_ADDRESS === account,
        adminAuth: true,
        account,
        isAuthenticated,
        loading,
        connect,
        disconnect,
        wrongChain: chainId as string !== (process.env.NEXT_PUBLIC_CHAIN_ID as string),
    }
}

export default useAuth;



