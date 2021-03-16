import React, { useState } from 'react';
import { TextField, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

import useStyles from './styles';
import calculate from '../../../utils/calculate'
import useFetch from '../../../context/useFetch'

const initialState = {
    coin: 'ETH',
    mhs: '',
    period: '1',
    power: '0.0',
    cost: '0.0',
}

const Form = () => {
    const classes = useStyles();
    const [formData, setFormData] = useState(initialState);
    const { setCalcData, calcData } = useFetch();

    const calculateData = (fd, cd) => {
        if(Number.isNaN(formData.mhs) || formData.mhs === ''
                || Number.isNaN(formData.period)  || formData.period === '0')
            return;

        console.log(fd, cd);
        /*const result = calculate(formData, calcData);
        console.log(result);*/
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} style={{marginTop: '10px',marginLeft: '20%', marginRight: '20%'}}>
                <FormControl fullWidth>
                    <InputLabel>Coin</InputLabel>
                    <Select value={formData.coin} 
                        onChange={(e)=> setFormData({...formData, mhs: e.target.value})}>
                        <MenuItem value='ETH'>ETH - (Ethereum)</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField type="number" label='MH/s' value={formData.mhs} fullWidth 
                    onChange={(e)=> setFormData({...formData, mhs: e.target.value})} />
            </Grid>
            <Grid item xs={6}>
                <TextField type="number" label='Period' value={formData.period} fullWidth 
                    onChange={(e)=> setFormData({...formData, period: e.target.value})} />
            </Grid>
            <Grid item xs={6}>
                <TextField type="number" color="secondary" label='Power (W)' value={formData.power} fullWidth 
                    onChange={(e)=> setFormData({...formData, power: e.target.value})}/>
            </Grid>
            <Grid item xs={6}>
                <TextField type="number" color="secondary" label='(W) cost' value={formData.cost} fullWidth 
                    onChange={(e)=> setFormData({...formData, cost: e.target.value})}/>
            </Grid>
            <Button className={classes.button} variant='outlined' color='primary' fullWidth onClick={calculate}>Calculate</Button>
        </Grid>
    )
}

export default Form
