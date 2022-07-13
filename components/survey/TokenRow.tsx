import React from 'react'

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';

import TokenSymbol from '../utilities/TokenSymbol';

import { Token } from '../../hooks/useTokens';

import theme from '../../styles/theme';
import { round2 } from '../../services/utils';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: '0.5rem 2rem',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }));

interface Props {
    token: Token,
    allocation: number,
    updateAllocation: (allocation: number) => void;
}

const TokenRow : React.FC<Props> = ({ token, allocation, updateAllocation }) => {


    const onAllocationChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const value = isNaN(parseFloat(e.target.value)) ? 0 : parseFloat(e.target.value);
        if(typeof value == 'number' && value <= 100 && value >= 0) {
            updateAllocation(value);
        }
    }

    return (
        <Grid container item key={token.symbol} spacing={2}>
            <Grid item xs={2} justifyContent='center'>
                <Item>
                    <TokenSymbol
                        symbol={token.symbol}
                        slug={token.slug}
                    />
                </Item>
            </Grid>
            <Grid item xs={2}>
                <Item>{token.name}</Item>
            </Grid>
            <Grid item xs={2}>
                <Item>
                    ${round2(token.price).toLocaleString()}
                </Item>
            </Grid>
            <Grid item xs={4}>
                <Item>
                    <Slider 
                        aria-label="Allocation"
                        value={allocation}
                        onChangeCommitted={(e, v) => updateAllocation(v as number)}
                        step={1}
                    />
                </Item>
            </Grid>
            <Grid item xs={2}>
                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <FormControl>
                        <OutlinedInput
                            value={allocation === 0 ? '' : allocation}
                            endAdornment={<InputAdornment position="end" sx={{color: theme.palette.text.secondary}}>%</InputAdornment>}
                            onChange={onAllocationChange}
                            type='number'
                            placeholder='0'
                            sx={{
                                backgroundColor: theme.palette.background.paper,
                                color: theme.palette.text.secondary,
                                fontWeight: 'bold'
                            }}
                        />
                    </FormControl>
                </Box>
            </Grid>
        </Grid>
    )
}

export default TokenRow