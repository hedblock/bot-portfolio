import { useEffect, useState } from 'react';
import { useMoralis, useMoralisQuery, useNewMoralisObject } from 'react-moralis';

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