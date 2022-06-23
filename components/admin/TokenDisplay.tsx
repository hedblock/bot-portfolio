import React from 'react'


import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';

import { Token } from '../../hooks/useAdmin';
import TokenSymbol from '../utilities/TokenSymbol';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: '0.5rem 1rem',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
}));

interface Props {
    token: Token,
    removeToken: (symbol: Token) => void
}

const TokenDisplay : React.FC<Props> = ({ token, removeToken }) => {

    return (
        <Box sx={{padding: '0.5rem'}}>
            <Item>
                <Stack 
                    direction='row' 
                    spacing={2} 
                    justifyContent='center' 
                    alignItems='center'
                >
                    <Stack alignItems='center'>
                        <TokenSymbol
                            symbol={token.symbol}
                            slug={token.slug}
                        />
                        <Typography
                            variant='body2'
                        >
                            {token.name}
                        </Typography>
                    </Stack>
                    <IconButton
                        onClick={() => removeToken(token)}
                    >
                        <ClearIcon />
                    </IconButton>
                </Stack>
            </Item>
        </Box>
    )
}

export default TokenDisplay