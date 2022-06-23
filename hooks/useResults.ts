import { useMoralisQuery } from "react-moralis";

interface Allocation {
    token: string;
    allocation: number;
}

interface Results {
    [key: string]: number;
}

const useResults = () => {

    // get all submissions
    const { data } = useMoralisQuery(
        "Submissions", 
        query => query,
        [],
        { live: true }
    );

    // calculate the aggregate allocation for each token
    const calculateResults = () => {

        const results : Results = {};

        data.forEach(submission => {
            submission.get('allocations').forEach((allocation : Allocation) => {
                if (results[allocation.token]) {
                    results[allocation.token] += allocation.allocation;
                } else {
                    results[allocation.token] = allocation.allocation;
                }
            })
        })

        Object.keys(results).forEach(token => results[token] /= data.length);

        return results
    }

    return {
        results: calculateResults(),
    }

}

export default useResults