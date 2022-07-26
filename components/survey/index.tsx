import React from 'react'

import useSurvey from '../../hooks/useSurvey';

import Tokens from './Tokens';
import SubmitButton from './SubmitButton';

import { VStack, Text, CircularProgress, Button } from '@chakra-ui/react';
import Link from 'next/link';

const SurveyComponent = () => {
    const { 
        tokens, 
        allocations,
        allocationsSum,
        invalidAllocations,
        updateAllocation,
        setEqualAllocations,
        submitAllocations,
        isSaving,
        complete,
    } = useSurvey();

    if(complete) {
        return (
            <VStack spacing={2}>
                <Text
                    fontSize="2xl"
                    fontWeight="bold"
                >
                    Survey Complete
                </Text>
                <Text 
                    align='center' 
                >
                    View this week{"'"}s survey results from the results page.
                </Text>
                <Link
                    href="/results"
                    passHref
                >
                    <Button
                        variant='solid'
                        colorScheme='brand'
                    >
                        View Results
                    </Button>
                </Link>
            </VStack>
        )
    }
    if(isSaving) {
        return (
            <VStack>
                <CircularProgress />
            </VStack>
        )
    }
    
    return (
        <VStack 
            spacing={8}
            align='flex-start'
            position='relative'
        >
            <VStack
                align='flex-start'
                spacing={1}
            >
                <Text
                    fontSize="2xl"
                    fontWeight="bold"
                >
                    Voting Page
                </Text>
                <Text>
                    Input your desired token allocations for the RVPC Portfolio. The portfolio is rebalanced every Sunday. Weekly results are available on the results page.
                </Text>
            </VStack>
            <Tokens
                tokens={tokens}
                allocations={allocations}
                updateAllocation={updateAllocation}
                allocationsSum={allocationsSum}
                setEqualAllocations={setEqualAllocations}
            />
            <SubmitButton 
                invalidAllocations={invalidAllocations}
                submitAllocations={submitAllocations}
            />
        </VStack>
    )
}

export default SurveyComponent