import { useState, useEffect } from 'react';
import { useMoralis, useMoralisQuery, useNewMoralisObject } from 'react-moralis';

import { TokenData } from '../pages/api/token';

export interface Token extends TokenData {
    price: number;
}

interface SubmissionData {
    [key: string]: any;
    id?: string;
    address: string;
    allocations: {
        token: string;
        allocation: number;
    }[];
}

const useSurvey = () => {

    const [tokens, setTokens] = useState<Token[]>([]);
    const [allocations, setAllocations] = useState<number[]>([]);
    const [allocationsSum, setAllocationsSum] = useState<number>(0);

    const { account } = useMoralis();

    // get all tokens to be included in the survey
    const { data: tokensData } = useMoralisQuery(
        "Tokens", 
        query => query.equalTo('included', true),
        [],
        { live: true }
    );

    // get submissions for current user
    const { data: submissionData } = useMoralisQuery(
        "Submissions",
        query => query.equalTo('address', account),
        [],
        { live: true }
    );

    const [complete, setComplete] = useState<boolean>(false);
        
    // hook to create and update submissions
    const { isSaving, save } = useNewMoralisObject('Submissions');

    // update token and allocation state when Moralis query changes
    useEffect(() => {
        if (tokensData.length > 0) {
            setTokens(tokensData.map((token) => ({
                symbol: token.get('symbol') as string,
                name: token.get('name') as string,
                slug: token.get('slug') as string,
                cmcId: token.get('cmcId') as number,
                price: token.get('price') as number,
            })))
            setAllocations(tokensData.map(_ => 0))
        }
    }, [tokensData]);

    // update allocation for given token and check if allocations sum to 100%
    const updateAllocation = (index: number, value: number) => {
        const newAllocations = [...allocations];
        newAllocations[index] = value;
        setAllocations(newAllocations);
        setAllocationsSum(newAllocations.reduce((a, b) => a + b, 0));
    };

    // create new submission if user hasnt submitted
    // update submission if user has already submitted
    const submitAllocations = async () => {
        if(allocationsSum !== 100 || !account) return;
        let data : SubmissionData = {
            address: account,
            allocations: tokens.map((token, index) => ({
                token: token.slug,
                allocation: allocations[index]
            }))
        }
        if(submissionData.length > 0) data.id = submissionData[0].id;
        await save(data);
        setComplete(true);
    }

    return { 
        tokens, 
        allocations,
        allocationsSum,
        invalidAllocations: allocationsSum !== 100,
        updateAllocation,
        submitAllocations,
        isSaving,
        complete,
    };
}

export default useSurvey;