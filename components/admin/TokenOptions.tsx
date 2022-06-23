import React from 'react'

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import TokenOption from './TokenOption';

import { Token } from '../../hooks/useAdmin';

interface Props {
    addOptions: Token[];
    selectOption: (token: Token) => void;
}

const TokenOptions : React.FC<Props> = ({ addOptions, selectOption }) => {
  return (
    <Stack alignItems='center' spacing={1}>
        <Typography color='#FFF'>Select an Option</Typography>
        <Stack direction='row' spacing={2}>
            {addOptions.map((option, index) => (
                <TokenOption
                    key={index}
                    tokenOption={option}
                    selectOption={() => selectOption(option)}
                />
            ))}
        </Stack>
    </Stack>
  )
}

export default TokenOptions