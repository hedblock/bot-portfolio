import React from 'react'

import useAdmin from '../../hooks/useAdmin';

import Tokens from './Tokens';
import AddToken from './AddToken';

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
        <>
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
            
        </>
    )
}

export default AdminComponent