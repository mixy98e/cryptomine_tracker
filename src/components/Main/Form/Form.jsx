import React, { useState, useEffect, useContext } from 'react';
import { TextField, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

import useStyles from './styles';
import getPrice from '../../../requests/priceFetch'
import getCoinParameters from '../../../requests/parametersFetch'
import calculateMineProfit from '../../../utils/calculateMineProfit'
import { MineCalculatorContext } from '../../../context/context'

const initialState = {
    coin: 'ETH',
    mhs: '0.0',
    period: '1',
    power: '0.0',
    cost: '0.0',
    price: '0.0',
    blockRev: '0.0',
    diff: '0.0'
}


const Form = () => {
    const classes = useStyles();
    const [formData, setFormData] = useState(initialState);
    const {getPTData} = useContext(MineCalculatorContext);

    useEffect(() => {
        Promise.all([
            getPrice(),
            getCoinParameters()
        ]).then(([repPrice, repParams]) => {
            setFormData({...formData,price: 
                repPrice['ethereum'].usd, 
                blockRev: repParams.ETH_blockRev, 
                diff: repParams.ETH_diff});
        });
      }, []);

    function calculate(){
        getPTData(calculateMineProfit(formData));
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
                <TextField type="number" color="secondary" label='(kWh) cost' value={formData.cost} fullWidth 
                    onChange={(e)=> setFormData({...formData, cost: e.target.value})}/>
            </Grid>
            <Button className={classes.button} variant='outlined' color='primary' fullWidth onClick={calculate}>Calculate</Button>
        </Grid>
    )
}

export default Form
