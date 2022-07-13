import React from 'react'

import useResults from '../../hooks/useResults'

import Stack from '@mui/material/Stack'
import Top10Allocations from './Top10Allocations'
import AllocationGrid from './AllocationGrid'

const ResultsComponent = () => {

    const { currentResults } = useResults();

    return (
        <Stack
            width='100%'
            spacing={8}
        >
            <Top10Allocations 
                results={currentResults}
            />
            <AllocationGrid
                results={currentResults}
            />
        </Stack>
    )
}

export default ResultsComponent