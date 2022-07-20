import { useMoralisQuery } from "react-moralis";

import { Moralis } from "moralis";
import useTokens from "./useTokens";

interface SubmissionAllocation {
    token: string;
    allocation: number;
}

export interface Allocation {
    symbol: string;
    slug: string;
    allocation: number;
    change: number;
    price: number;
}

const useResults = () => {

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const twoSundaysAgo = new Date(today.setDate(today.getDate() - today.getDay() - 7))
    const lastSunday = new Date(today.setDate(today.getDate() - today.getDay() + 7));
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

    const { data: lastWeekCache, isLoading } = useMoralisQuery(
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
    const calculateResults = () => {
        const thisWeekResults = getResultsObject(submissions);
        const lastWeekResults = lastWeekCache[0].get('results');
        console.log(lastWeekResults);
        const results : Allocation[] = tokens
            .map(token => {
                const currentAllocation = thisWeekResults[token.slug] / submissions.length;
                const lastAllocation = lastWeekResults[token.slug];
                console.log()
                return {
                    symbol: token.symbol,
                    slug: token.slug,
                    allocation: currentAllocation,
                    change: lastAllocation
                        ? currentAllocation - lastAllocation
                        : (currentAllocation > 0 ? 100 : 0),
                    price: token.price,
                }
            })
            .sort((a, b) => b.allocation - a.allocation);
        return results;
    }

    return {
        currentResults: isLoading ? [] : calculateResults(),
    }

}

export default useResults