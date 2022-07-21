import React from 'react';

import useAuth from '../../hooks/useAuth';

import { VStack, Button, Text } from '@chakra-ui/react';


interface Props {
    invalidAllocations: boolean;
    submitAllocations: () => void;
}

const SubmitButton : React.FC<Props> = ({ invalidAllocations, submitAllocations }) => {

    const { tokenAuth: surveyAuth } = useAuth();

    return (
        <VStack
            w='100%'
            spacing={1} 
        >
            <Button
                variant='solid'
                colorScheme='brand'
                onClick={submitAllocations}
                disabled={!surveyAuth || invalidAllocations}
            >
                Submit
            </Button>
            {
                !surveyAuth && (
                    <Text 
                        color='red.600'
                    >
                        You must own an RVPC NFT to submit
                    </Text>
                )
            }
            {
                invalidAllocations && (
                    <Text 
                        variant='body2' 
                        color='red.600'
                    >
                        Your allocations must sum to 100%
                    </Text>
                )
            }
        </VStack>
    )
}

export default SubmitButton