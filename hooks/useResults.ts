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
    const twoSundaysAgo = new Date(today.setDate(today.getDate() - today.getDay() - 7))
    const lastSunday = new Date(today.setDate(today.getDate() - today.getDay() + 7));
    const nextSunday = new Date(today.setDate(today.getDate() - today.getDay() + 7));

    const tokens = useTokens();

    // get all submissions
    const { data: thisWeek } = useMoralisQuery(
        "Submissions", 
        query => query
            .greaterThan('updatedAt', lastSunday)
            .lessThan('updatedAt', nextSunday),
        [],
        { live: true }
    );

    const { data: lastWeek } = useMoralisQuery(
        "Submissions",
        query => query
            .greaterThan('updatedAt', twoSundaysAgo)
            .lessThan('updatedAt', lastSunday),
        [],
    );

    const getResultsObject = (allocations: Moralis.Object<Moralis.Attributes>[]) => {
        const resultsObject : {[key: string]: number} = {};
        allocations.forEach(submission => {
            submission.get('allocations').forEach((allocation : SubmissionAllocation) => {
                if (resultsObject[allocation.token]) {
                    resultsObject[allocation.token] += allocation.allocation;
                } else {
                    resultsObject[allocation.token] = allocation.allocation;
                }
            })
        })
        return resultsObject;
    }

    // calculate the aggregate allocation for each token
    const calculateResults = () => {
        const thisWeekResults = getResultsObject(thisWeek);
        const lastWeekResults = getResultsObject(lastWeek);
        const results : Allocation[] = tokens
            .map(token => {
                const currentAllocation = thisWeekResults[token.slug] / thisWeek.length;
                const lastAllocation = lastWeekResults[token.slug] / lastWeek.length;
                return {
                    symbol: token.symbol,
                    slug: token.slug,
                    allocation: currentAllocation,
                    change: lastAllocation 
                        ? currentAllocation - lastAllocation / lastAllocation
                        : (currentAllocation > 0 ? 100 : 0),
                    price: token.price,
                }
            })
            .sort((a, b) => b.allocation - a.allocation);
        return results
    }

    return {
        currentResults: calculateResults(),
    }

}

export default useResults