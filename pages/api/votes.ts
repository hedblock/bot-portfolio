// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import Moralis from 'moralis/node';

interface Allocation {
    token: string;
    allocation: number;
}

interface Submission {
    id: string;
    updatedAt: Date;
    allocations: Allocation[];
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Submission[]>) => {
    await Moralis.start({
        serverUrl: process.env.NEXT_PUBLIC_MORALIS_SERVER_URL,
        appId: process.env.NEXT_PUBLIC_MORALIS_APP_ID,
        masterKey: process.env.MORALIS_MASTER_KEY,
    })

    const query = new Moralis.Query("Submissions");

    const results = await query.find();
    const submissions : Submission[] = results.map(result => {
        return {
            id: result.id,
            updatedAt: result.get("updatedAt"),
            allocations: result.get("allocations"),
            address: result.get("address"),
        }
    });
    res.status(200).json(submissions);
}

export default handler;