import React from 'react'

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import TokenSymbol from '../utilities/TokenSymbol';

import { Allocation } from '../../hooks/useResults';
import { round2 } from '../../services/utils';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: '0.5rem 2rem',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
}));

interface Props {
    allocation: Allocation
}

const AllocationRow : React.FC<Props> = ({ allocation }) => {

    return (
        <Grid 
            container 
            item 
            spacing={2}
        >
            <Grid item xs={3} justifyContent='center'>
                <Item>
                    <TokenSymbol
                        symbol={allocation.symbol}
                        slug={allocation.slug}
                    />
                </Item>
            </Grid>
            <Grid item xs={3} justifyContent='center'>
                <Item>
                    ${round2(allocation.price)}
                </Item>
            </Grid>
            <Grid item xs={3}>
                <Item>
                    {allocation.allocation}%
                </Item>
            </Grid>
            <Grid item xs={3}>
                <Item>
                    {allocation.change !== 0 && (allocation.change > 0 ? "+" : "-")}{allocation.change}%
                </Item>
            </Grid>
        </Grid>
    )
}

export default AllocationRow