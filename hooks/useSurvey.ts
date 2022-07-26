import { useEffect, useState } from 'react';
import { useMoralis, useMoralisQuery, useNewMoralisObject } from 'react-moralis';
import { round2 } from '../services/utils';

import useTokens from './useTokens';

interface Allocation {
    token: string;
    allocation: number;
}


interface SubmissionData {
    [key: string]: any;
    id?: string;
    address: string;
    allocations: Allocation[];
}

const useSurvey = () => {

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const lastSunday = new Date(today.setDate(today.getDate() - today.getDay()));

    const [allocations, setAllocations] = useState<number[]>([]);
    const [allocationsSum, setAllocationsSum] = useState<number>(0);

    const { account } = useMoralis();

    const tokens = useTokens();

    // get submissions for current user
    const { data: submissionData } = useMoralisQuery(
        "Submissions",
        query => query
            .equalTo('address', account)
            .greaterThan('updatedAt', lastSunday),
        [],
        { live: true }
    );

    useEffect(() => {
        setAllocations(tokens.map(_ => 0));
    }, [tokens])

    const [complete, setComplete] = useState<boolean>(false);
        
    // hook to create and update submissions
    const { isSaving, save } = useNewMoralisObject('Submissions');
    

    // update allocation for given token and check if allocations sum to 100%
    const updateAllocation = (index: number, value: number) => {
        const otherSum = allocations.reduce((acc, cur, i) => (i === index ? acc : acc + cur), 0);
        const denom = otherSum / (100 - value);
        const newAllocations = allocations.map((allocation, i) => {
            if (i === index) {
                return value;
            } else {
                if(denom > 1) {
                    return round2(allocation / denom);
                } else {
                    return allocation;
                }
            }
        });
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

    const setEqualAllocations = () => {
        setAllocations(tokens.map(_ => 100 / tokens.length));
    }

    return { 
        tokens, 
        allocations,
        allocationsSum,
        invalidAllocations: allocationsSum !== 100,
        updateAllocation,
        setEqualAllocations,
        submitAllocations,
        isSaving,
        complete,
    };
}

export default useSurvey;