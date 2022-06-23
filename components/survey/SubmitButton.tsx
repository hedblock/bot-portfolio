import React from 'react';

import useAuth from '../../hooks/useAuth';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


interface Props {
    invalidAllocations: boolean;
    submitAllocations: () => void;
}

const SubmitButton : React.FC<Props> = ({ invalidAllocations, submitAllocations }) => {

    const { tokenAuth: surveyAuth } = useAuth();

    return (
        <Stack spacing={1} alignItems='center'>
            <Button
                variant='contained'
                onClick={submitAllocations}
                disabled={!surveyAuth || invalidAllocations}
            >
                Submit
            </Button>
            {
                !surveyAuth && (
                    <Typography variant='body2' color='error'>
                        You must own an RVPC NFT to submit
                    </Typography>
                )
            }
            {
                invalidAllocations && (
                    <Typography variant='body2' color='error'>
                        Your allocations must sum to 100%
                    </Typography>
                )
            }
        </Stack>
    )
}

export default SubmitButton