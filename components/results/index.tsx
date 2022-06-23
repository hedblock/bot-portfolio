import React from 'react'

import useResults from '../../hooks/useResults'

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

const ResultsComponent = () => {

    const { results } = useResults();

    return (
        <Stack>
            {
                Object.keys(results).map(tokenSlug => (
                    <Typography key={tokenSlug} color='text.secondary'>
                        {tokenSlug}: {results[tokenSlug]}%
                    </Typography>
                ))
            }
        </Stack>
    )
}

export default ResultsComponent