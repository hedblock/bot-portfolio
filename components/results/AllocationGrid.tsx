import React from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import HeaderRow from './HeaderRow';
import AllocationRow from './AllocationRow';

import { Allocation } from '../../hooks/useResults';

interface Props {
    results: Allocation[],
}

const AllocationGrid : React.FC<Props> = ({ results }) => {

    return (
        <Stack
            alignItems='center'
            spacing={2}
        >
            <Typography
                variant='h6'
            >
                All Allocations
            </Typography>
            <Grid container spacing={2}>
                <HeaderRow />
                {
                    results.map(allocation => (
                        <AllocationRow
                            key={allocation.symbol}
                            allocation={allocation}
                        />
                    ))
                }
            </Grid>
        </Stack>
    )
}

export default AllocationGrid;