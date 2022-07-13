import { useState, useEffect } from 'react';

import { useMoralisQuery } from 'react-moralis';

import { TokenData } from '../pages/api/token';

export interface Token extends TokenData {
    price: number;
}

const useTokens = () => {

    // get all tokens to be included in the survey
    const { data: tokensData } = useMoralisQuery(
        "Tokens",
        query => query.equalTo('included', true),
        [],
        { live: true }
    );

    const [tokens, setTokens] = useState<Token[]>([]);
    
    useEffect(() => {
        const fetchTokens = async () => {
        const response = await fetch("/api/tokens");
        const json = await response.json();
        setTokens(json);
        }
        fetchTokens();
    }, []);

    useEffect(() => {
        if (tokensData.length > 0) {
            setTokens(tokensData.map((token) => ({
                symbol: token.get('symbol') as string,
                name: token.get('name') as string,
                slug: token.get('slug') as string,
                cmcId: token.get('cmcId') as number,
                price: token.get('price') as number,
            })));
        }
    }, [tokensData]);
    
    return tokens;
}

export default useTokens;