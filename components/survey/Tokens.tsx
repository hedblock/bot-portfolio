import React from 'react';

import Grid from '@mui/material/Grid';

import HeaderRow from './HeaderRow';
import TokenRow from './TokenRow';

import { Token } from '../../hooks/useSurvey';
import FooterRow from './Footer';

interface Props {
    tokens: Token[],
    allocations: number[],
    allocationsSum: number,
    updateAllocation: (index: number, allocation: number) => void,
}

const Tokens : React.FC<Props> = ({ tokens, allocations, updateAllocation, allocationsSum }) => {

    return (
        <Grid container spacing={2}>
            <HeaderRow />
            {
                tokens.map((token, index) => (
                    <TokenRow
                        key={token.symbol}
                        token={token}
                        allocation={allocations[index]}
                        updateAllocation={(allocation) => updateAllocation(index, allocation)}
                    />
                ))
            }
            <FooterRow allocationsSum={allocationsSum}/>
        </Grid>
    )
}

export default Tokens;