import React from 'react';
import { Grid, ButtonGroup, Button } from '@material-ui/core';
import { Line } from 'react-chartjs-2';

import useStyles from './styles';


const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Support",
        data: [22000, 22500, 50000, 41000, 44000, 65000],
        fill: true,
        backgroundColor: "rgba(245, 0, 87 ,0.2)",
        borderColor: "rgba(245, 0, 87,1)"
      },
      {
        label: "Price",
        data: [33000, 25000, 64000, 51000, 54000, 76000],
        fill: false,
        borderColor: "#2196f3"
      }
    ]
  };

const PriceChart = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container spacing={2} alignItems="center" justify="flex-start"> 
                <Grid item xs={12}>       
                    <ButtonGroup className={classes.btnGr1st} color='primary'>
                        <Button size="small">24h</Button>
                        <Button size="small">7d</Button>
                        <Button size="small">1m</Button>
                    </ButtonGroup>
                    <ButtonGroup className={classes.btnGr2nd} color='secondary'>
                        <Button size="small">High</Button>
                        <Button size="small">Avg.</Button>
                        <Button size="small">Low</Button>
                    </ButtonGroup>
                </Grid>
                <Grid item xs={12}>                
                    <Line data={data} />
                </Grid>
          </Grid>
        </div>
    )
}

export default PriceChart
