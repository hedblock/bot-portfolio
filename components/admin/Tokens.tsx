import React from 'react'

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { Token } from '../../hooks/useAdmin';
import TokenDisplay from './TokenDisplay';

interface Props {
    tokens: Token[];
    removeToken: (symbol: Token) => void;
}

const Tokens : React.FC<Props> = ({ tokens, removeToken }) => {
    return tokens.length > 0 ? (
        <Stack 
            direction='row' 
            justifyContent='center' 
            alignItems='center' 
            flexWrap='wrap' 
            spacing={2}
        >
            {
                tokens.map((token, index) => (
                    <TokenDisplay key={token.symbol} token={token} removeToken={removeToken} />
                ))
            }
        </Stack>
    ) : (
        <Typography variant='body2' color='#FFF' align='center'>No Tokens Added</Typography>
    )
}

export default Tokens