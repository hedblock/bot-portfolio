import React from 'react'

import useAdmin from '../../hooks/useAdmin';

import Tokens from './Tokens';
import AddToken from './AddToken';
import { VStack } from '@chakra-ui/react';

const AdminComponent = () => {

    const { 
        tokens, 
        addOptions, 
        addError, 
        addToken,
        selectOption,
        removeToken, 
    } = useAdmin();

    return (
        <VStack
            spacing={4}
            justify='center'
            flex={1}
        >
            <Tokens
                tokens={tokens}
                removeToken={removeToken}
            />
            <AddToken 
                addToken={addToken} 
                addOptions={addOptions}
                selectOption={selectOption}
                addError={addError}
            />
            
        </VStack>
    )
}

export default AdminComponent