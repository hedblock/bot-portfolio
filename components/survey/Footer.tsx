import React from 'react'

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    backgroundColor: '#282b31',
    padding: '0.5rem 2rem',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    opacity: 1,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
}));

interface Props {
    allocationsSum: number
}

const FooterRow : React.FC<Props> = ({ allocationsSum }) => {
  return (
    <Grid 
        container 
        item
        spacing={1}
        alignItems='center'
        justifyContent='center'
        position='fixed'
        bottom='1rem'
        right='1rem'
    >
        <Grid xs={10} item />
        <Grid xs={2} item >
            <Item>Total: {allocationsSum}%</Item>
        </Grid>
    </Grid>
  )
}

export default FooterRow