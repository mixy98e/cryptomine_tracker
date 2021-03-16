import React from 'react'
import { Card, CardHeader, CardContent, Typography, Grid } from '@material-ui/core'
import { Doughnut } from 'react-chartjs-2'

import useStyles from './styles'
import PriceChart from './PriceChart/PriceChart';
import CoinTable from './CoinTable/CoinTable'

const options = {
    legend: {
      display: true,
      position: "top"
    },
    elements: {
      arc: {
        borderWidth: 0
      }
    }
  };

  const data = {
    maintainAspectRatio: false,
    responsive: false,
    labels: ["Ups", "Downs"],
    datasets: [
      {
        data: [300, 50],
        backgroundColor: ['#2196f3', '#f50057'],
        hoverBackgroundColor: "lightgray"
      }
    ]
  };


const Details = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Card className={classes.card}>
                    <CardHeader title={'Current stats: ETH'} />
                    <CardContent>
                        <Grid container spacint={2}>
                            <Grid item xs={12} sm={7}>                    
                                <PriceChart />
                            </Grid>
                            <Grid item xs={12} sm={5}>
                                <Typography align='center' variant='h5' style={{marginBottom: '15px'}}>Highs and lows</Typography>
                                <Typography align='center' variant='subtitle2' style={{marginBottom: '15px'}}>Fluctiations based on last 24h</Typography>
                                <Doughnut data={data} options={options} />
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12}>
                <Card className={classes.card}>
                    <CardContent>
                        <CoinTable />
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default Details
