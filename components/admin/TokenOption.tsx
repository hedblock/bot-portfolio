import React from 'react'

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

import { TokenData } from '../../pages/api/token';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: '0.5rem 2rem',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '&:hover': {
        backgroundColor: theme.palette.primary.main,
        cursor: 'pointer'
    }
}));


interface Props {
    tokenOption: TokenData,
    selectOption: () => void
}

const TokenOption : React.FC<Props> = ({ tokenOption, selectOption }) => {

  return (
    <Item onClick={selectOption}>
        <Stack>
            <Typography variant='body1'>{tokenOption.name}</Typography>
            <Typography variant='caption'>{tokenOption.symbol}</Typography>
        </Stack>
    </Item>
  )
}

export default TokenOption