import React from 'react';
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

import useStyles from './styles';

const Form = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} style={{marginTop: '10px',marginLeft: '20%', marginRight: '20%'}}>
                <FormControl fullWidth>
                    <InputLabel>Coin</InputLabel>
                    <Select>
                        <MenuItem value="ETH">ETH - (Ethereum)</MenuItem>
                        {/*<MenuItem value="ETC">ETH - (Eth classic)</MenuItem>*/}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField type="number" label='MH/s' value='' fullWidth />
            </Grid>
            <Grid item xs={6}>
                <TextField type="number" label='Period' value='' fullWidth />
            </Grid>
            <Grid item xs={6}>
                <TextField type="number" color="secondary" label='Power (W)' value='' fullWidth />
            </Grid>
            <Grid item xs={6}>
                <TextField type="number" color="secondary" label='(W) cost' value='' fullWidth />
            </Grid>
            <Button className={classes.button} variant='outlined' color='primary' fullWidth>Calculate</Button>
        </Grid>
    )
}

export default Form
