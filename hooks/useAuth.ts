import { useState, useEffect } from 'react';

import { Moralis } from 'moralis';
import { useMoralis, useWeb3ExecuteFunction } from 'react-moralis';

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
    const { account, isWeb3Enabled, enableWeb3 } = useMoralis();

    useEffect(() => {
        const checkWeb3 = async () => {
            const connectorId = window.localStorage.getItem("connectorId");
            if (!account && connectorId) {
                await enableWeb3({ provider: connectorId as Moralis.Web3ProviderType });
            }
            setLoading(false);
        }
        checkWeb3();
    }, [account, isWeb3Enabled, enableWeb3]);

    const connect = async (connectorId : Moralis.Web3ProviderType) => {
        if (!isWeb3Enabled) {
            await enableWeb3({ provider: connectorId });
            window.localStorage.setItem("connectorId", connectorId);
        }
    }

    // fetch RVPC NFT balance of current account 
    const { data, error, fetch } = useWeb3ExecuteFunction({
        abi: [{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}],
        contractAddress: "0x76236b6f13f687d0bbedbbce0e30e9f07d071c1c",
        functionName: "balanceOf",
        params: {owner: account}
    }, );

    // fetch balance whenever account changes
    useEffect(() => {
        fetch();
    }, [account, fetch]);

    return {
        // tokenAuth: data instanceof BigNumber && !data.isZero(),
        // adminAuth: account && process.env.NEXT_PUBLIC_ADMIN_ADDRESS === account,
        account,
        loading,
        connect,
        tokenAuth: true,
        adminAuth: true,
    }
}

export default useAuth;



