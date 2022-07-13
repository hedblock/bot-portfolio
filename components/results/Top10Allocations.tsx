import React from 'react'

import {
    Stack,
    Typography
} from '@mui/material'

import BarChart from './BarChart'

interface Allocation {
    symbol: string;
    allocation: number;
}

interface Props {
    results: Allocation[]
}

const Top10Allocations : React.FC<Props> = ({ results }) => {

    const numAllocations = 10;

    return (
        <Stack
            alignItems='center'
        >
            <Typography
                variant='h6'
            >
                Top 10 Allocations
            </Typography>
            <BarChart 
                data={results.slice(0, numAllocations).map(allocation => allocation.allocation)}
                labels={results.slice(0, numAllocations).map(allocation => allocation.symbol)}
            />
        </Stack>
    )
}

export default Top10Allocations