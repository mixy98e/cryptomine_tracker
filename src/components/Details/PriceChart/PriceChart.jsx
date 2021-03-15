import React from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, ButtonGroup, Button } from '@material-ui/core';
import { Line } from 'react-chartjs-2';

import useStyles from './styles';

const PriceChart = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container spacing={2} alignItems="center" justify="flex-start"> 
                <Grid item xs={8}>       
                    <ButtonGroup className={classes.btnGr1st} color='primary'>
                        <Button>24h</Button>
                        <Button>7d</Button>
                        <Button>1m</Button>
                    </ButtonGroup>
                    <ButtonGroup className={classes.btnGr2nd} color='secondary'>
                        <Button>High</Button>
                        <Button>Avg.</Button>
                        <Button>Low</Button>
                    </ButtonGroup>
                </Grid>
                <Grid item xs={8}>                
                    <Line />
                </Grid>
                <Grid item xs={4}>
                    {/*jump/fall percenteage doghnut chart*/}
                    holder
                </Grid>
          </Grid>
        </div>
    )
}

export default PriceChart


/*

          <Grid container spacing={2} alignItems="center" justify="flex-start"> 
            <Grid item xs={8}>       
                    <ButtonGroup className={classes.btnGr1st} color='primary'>
                        <Button>24h</Button>
                        <Button>7d</Button>
                        <Button>1m</Button>
                    </ButtonGroup>
                    <ButtonGroup className={classes.btnGr2nd} color='secondary'>
                        <Button>High</Button>
                        <Button>Avg.</Button>
                        <Button>Low</Button>
                    </ButtonGroup>
            </Grid>
            <Grid item xs={12} sm={8}>                
               <Line height="75"/>
            </Grid>
          </Grid>
*/