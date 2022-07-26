import { useMoralisQuery } from "react-moralis";
import { Moralis } from "moralis";

import useTokens, { Token } from "./useTokens";

import { round2 } from "../services/utils";

interface SubmissionAllocation {
    token: string;
    allocation: number;
}

export interface Allocation extends Token {
    symbol: string;
    slug: string;
    allocation: number;
    change: number;
    price: number;
}

const useResults = () => {

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const lastSunday = new Date(today.setDate(today.getDate() - today.getDay()));
    const nextSunday = new Date(today.setDate(today.getDate() - today.getDay() + 7));

    const tokens = useTokens();

    // get all submissions
    const { data: submissions } = useMoralisQuery(
        "Submissions", 
        query => query
            .greaterThan('updatedAt', lastSunday)
            .lessThan('updatedAt', nextSunday),
        [],
        { live: true }
    );

    const { data: lastWeekCache, isLoading, error } = useMoralisQuery(
        "Results",
        query => query
            .descending('startDate')
            .limit(1),
        [],
    );

    const getResultsObject = (submissions: Moralis.Object<Moralis.Attributes>[]) => {
        return submissions.reduce((acc : {[key: string]: number}, submission) => {
            submission.get('allocations').forEach((allocation : SubmissionAllocation) => {
                acc[allocation.token] = (acc[allocation.token] || 0) + allocation.allocation;
            })
            return acc;
        }, {});
    }

    // calculate the aggregate allocation for each token
    const calculateResults = () : Allocation[] => {
        const thisWeekResults = getResultsObject(submissions);
        const lastWeekResults = lastWeekCache.length > 0 ? lastWeekCache[0].get('results') : {};
        return tokens.map(token => {
            const currentAllocation = round2((thisWeekResults[token.slug] || 0) / (submissions.length || 1));
            const lastAllocation = round2(lastWeekResults[token.slug] || 0);
            return {
                ...token,
                allocation: currentAllocation,
                change: currentAllocation - lastAllocation,
            }
        })
        .sort((a, b) => b.allocation - a.allocation);
    }

    return {
        currentResults: isLoading ? [] : calculateResults(),
    }

}

export default useResults