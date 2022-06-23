import { useEffect } from 'react';

import { BigNumber } from '@ethersproject/bignumber';

import { useMoralis, useWeb3ExecuteFunction } from 'react-moralis';

const useAuth = () => {

    // currently connected account
    const { account } = useMoralis();

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
        tokenAuth: true,
        adminAuth: true,
    }
}

export default useAuth;



