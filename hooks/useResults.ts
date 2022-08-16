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

    const tokens = useTokens();

    const { data: pastResults, isLoading } = useMoralisQuery(
        "Results",
        query => query
            .descending('startDate')
            .limit(2),
        [],
    );

    // calculate the aggregate allocation for each token
    const calculateResults = () : Allocation[] => {
        const lastWeekResults = pastResults.length > 0 ? pastResults[0].get('results') : {};
        const prevWeekResults = pastResults.length > 1 ? pastResults[1].get('results') : {};
        return tokens.map(token => {
            const allocation = round2(lastWeekResults[token.slug] || 0);
            return {
                ...token,
                allocation,
                change: round2(allocation - (prevWeekResults[token.slug] || 0)),
            }
        })
        .sort((a, b) => b.allocation - a.allocation);
    }

    return {
        currentResults: isLoading ? [] : calculateResults(),
    }

}

export default useResults