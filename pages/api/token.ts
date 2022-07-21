// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

interface Error {
    error: string
}

interface TokenResponse {
    symbol: string;
    name: string;
    slug: string;
    id: number;
    logo: string;
}

export interface TokenData {
    symbol: string;
    name: string;
    slug: string;
    cmcId: number;
    logo: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse<TokenData | Error>) => {
    if(!process.env.CMC_API_KEY) return;
    const tokenQuery = await fetch(`https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?symbol=${req.body.symbol}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-CMC_PRO_API_KEY': process.env.CMC_API_KEY,
        },
    })

    if(tokenQuery.status !== 200){
        res.status(tokenQuery.status).json({
            error: tokenQuery.statusText,
        })
    } else {
        const tokenData = (await tokenQuery.json()).data[req.body.symbol];
        res.status(200).json(tokenData.map((token : TokenResponse) => ({
            symbol: token.symbol,
            name: token.name,
            slug: token.slug,
            cmcId: token.id,
            logo: token.logo
        })))
    }
}

export default handler;