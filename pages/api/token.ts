// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

interface Error {
    error: string
}

interface TokenResponse {
    symbol: string
    name: string
    slug: string
    id: number
}

export interface TokenData {
    symbol: string,
    name: string,
    slug: string,
    cmcId: number,
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

    if(tokenQuery.status === 400){
        res.status(400).json({
            error: 'Invalid token symbol'
        })
    } else {
        const tokenData = (await tokenQuery.json()).data[req.body.symbol];
        res.status(200).json(tokenData.map((token : TokenResponse) => ({
            symbol: token.symbol,
            name: token.name,
            slug: token.slug,
            cmcId: token.id,
            coinMarketCapUrl: `https://coinmarketcap.com/currencies/${token.slug}/`
        })))
    }
}

export default handler;