import React from 'react'

import useSurvey from '../../hooks/useSurvey';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import Tokens from './Tokens';
import SubmitButton from './SubmitButton';

const SurveyComponent = () => {
    const { 
        tokens, 
        allocations,
        allocationsSum,
        invalidAllocations,
        updateAllocation,
        submitAllocations,
        isSaving,
        complete,
    } = useSurvey();
    
    return (
        <Stack 
            spacing={4}
            direction="column"
            alignItems="center"
        >
            {
                complete ? (
                    <Typography>
                        Submitted!
                    </Typography>
                ) : (
                    isSaving ? (
                        <CircularProgress />
                    ) : (
                        <>
                            <Tokens
                                tokens={tokens}
                                allocations={allocations}
                                updateAllocation={updateAllocation}
                                allocationsSum={allocationsSum}
                            />
                            <SubmitButton 
                                invalidAllocations={invalidAllocations}
                                submitAllocations={submitAllocations}
                            />
                        </>
                    )
                )
            }
        </Stack>
    )
}

export default SurveyComponent