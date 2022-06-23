import React from 'react'

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const Item = styled(Typography)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontWeight: 'bold'
}));


const HeaderRow : React.FC = () => (
    <Grid 
        container 
        item 
        spacing={1}
        alignItems='center'
        justifyContent='center'
    >
        <Grid xs={2}>
            <Item>Symbol</Item>
        </Grid>
        <Grid xs={2}>
            <Item>Name</Item>
        </Grid>
        <Grid xs={2}>
            <Item>Current Price</Item>
        </Grid>
        <Grid xs={4}>
            <Item>Weight</Item>
        </Grid>
        <Grid xs={2}>
            <Item>Allocation</Item>
        </Grid>
    </Grid>
)

export default HeaderRow