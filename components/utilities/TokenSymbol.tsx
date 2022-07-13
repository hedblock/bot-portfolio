import React from 'react'

import Link from 'next/link'

interface Props {
    symbol: string,
    slug: string,
}

const TokenSymbol : React.FC<Props> = ({ symbol, slug }) => {
    return (
        <Link 
            href={`https://coinmarketcap.com/currencies/${slug}/`}
            
        >
            <a 
                style={{
                    textDecoration: 'none',
                    color: '#FFF',
                    fontWeight: 'bold',
                }}
            >
                {symbol}
            </a>
        </Link>
    )
}

export default TokenSymbol