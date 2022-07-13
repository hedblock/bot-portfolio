import React from 'react'

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
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
        <Grid xs={3}>
            <Item>Token</Item>
        </Grid>
        <Grid xs={3}>
            <Item>Price</Item>
        </Grid>
        <Grid xs={3}>
            <Item>Allocation</Item>
        </Grid>
        <Grid xs={3}>
            <Item>Allocation Change</Item>
        </Grid>
    </Grid>
)

export default HeaderRow