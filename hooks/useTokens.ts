import { useState, useEffect } from 'react';

import { useMoralisQuery } from 'react-moralis';

import { TokenData } from '../pages/api/token';

export interface Token extends TokenData {
    price: number;
}

const useTokens = () => {

    const [tokens, setTokens] = useState<Token[]>([]);

    // get all tokens to be included in the survey
    const { data: tokensData } = useMoralisQuery(
        "Tokens",
        query => query.equalTo('included', true),
        [],
        { live: true }
    );

    useEffect(() => {
        if (tokensData.length > 0) {
            setTokens(tokensData.map((token) => ({
                symbol: token.get('symbol') as string,
                name: token.get('name') as string,
                slug: token.get('slug') as string,
                cmcId: token.get('cmcId') as number,
                price: token.get('price') as number,
                logo: token.get('logo') as string,
            })));
        }
    }, [tokensData]);
    
    return tokens;
}

export default useTokens;