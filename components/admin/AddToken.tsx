import React from 'react'

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import TokenOptions from './TokenOptions';

import { Token } from '../../hooks/useAdmin';

interface Props {
    addToken: (token: string) => Promise<void>,
    selectOption: (token: Token) => void,
    addOptions: Token[],
    addError: boolean
}

const AddToken : React.FC<Props> = ({ addToken, selectOption, addOptions, addError }) => {

    const [symbol, setSymbol] = React.useState('');

    const submit = async () => {
        await addToken(symbol.toUpperCase());
        setSymbol('');
    }

  return (
    <Stack alignItems='center' spacing={2}>
        <Stack direction='row' spacing={2}>
            <TextField 
                label='Token Symbol'
                value={symbol}
                onChange={(e) => setSymbol(e.target.value)}
                sx={{
                    input: {
                        color: '#FFF'
                    }
                }}
            />
            <Button
                variant='outlined'
                onClick={submit}
            >
                Add
            </Button>
        </Stack>
        {addError && <Typography variant='caption' color='error'>Token not found.</Typography>}
        {addOptions.length > 0 && (
            <TokenOptions 
                addOptions={addOptions} 
                selectOption={selectOption} 
            />)}
    </Stack>
  )
}

export default AddToken