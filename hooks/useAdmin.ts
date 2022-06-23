import { useState, useEffect } from 'react';
import { useMoralisQuery, useNewMoralisObject, useMoralis } from 'react-moralis';

import { TokenData } from '../pages/api/token';

export interface Token extends TokenData {
    objectId?: string;
}

const useAdmin = () => {

    const { Moralis } = useMoralis();

    // get all tokens which are included in the survey
    // tokens to be included in the survey are indicated by a true 'included' field in the Tokens table
    // updates each time the included rows change
    const { data: tokensData } = useMoralisQuery(
        "Tokens", 
        query => query.equalTo('included', true),
        [],
        { live: true }
    );

    // saves a token to the Tokens table
    const { isSaving, error: saveError, save } = useNewMoralisObject('Tokens');

    // fetches tokens from the Tokens table by symbol
    const fetchTokensBySymbol = async (symbol: string) => {
        const Tokens = Moralis.Object.extend('Tokens');
        const query = new Moralis.Query(Tokens);
        query.equalTo('symbol', symbol)
        return query.find();
    }

    // updates the tokens state each time the tokensData Moralis query changes
    useEffect(() => {
        setTokens(tokensData.map(token => ({
            symbol: token.get('symbol') as string,
            name: token.get('name') as string,
            slug: token.get('slug') as string,
            cmcId: token.get('cmcId') as number,
            objectId: token.id,
        })));
    }, [tokensData]);

    const [tokens, setTokens] = useState<Token[]>([]);
    const [addOptions, setAddOptions] = useState<Token[]>([]);
    const [addError, setAddError] = useState<boolean>(false);

    // adds a token to the included list of the Tokens table by symbol
    const addToken = async (symbol: string) => {
        // fetch token from Moralis Tokens table by symbol
        const token = await fetchTokensBySymbol(symbol);
        // if the token symbol exists in the table already, set included to true
        if (token.length > 0) {
            await save({
                objectId: token[0].id,
                included: true,
            })
        } 
        // token does not exist in Moralis Tokens table
        else {
            // pull data from CoinMarketCap
            const tokenQuery = await fetch('/api/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ symbol })
            });
            // token does not exist
            if(tokenQuery.status === 400){
                setAddError(true);
                setAddOptions([]);
            } else {
                const data : TokenData[] = await tokenQuery.json();
                // only one token with given symbol
                if(data.length === 1){
                    selectOption(data[0]);
                } 
                // multiple tokens exist, display options to admin
                else {
                    setAddOptions(data);
                    setAddError(false);
                }
            }
        }
    }

    // select token to add to Tokens table
    // called when CoinMarketCap returns multiple results
    const selectOption = (option: Token) => {
        setAddOptions([]);
        setAddError(false);
        save({
            ...option,
            included: true,
        });
    }

    // remove token from included list
    const removeToken = (token: Token) => {
        save({
            id: token.objectId,
            included: false
        });
    }

    return {
        tokens,
        addOptions,
        addError,
        addToken,
        selectOption,
        removeToken,
        isSaving
    }
}

export default useAdmin;