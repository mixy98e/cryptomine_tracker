import React, { useEffect, useState } from 'react';
import { Grid, ButtonGroup, Button } from '@material-ui/core';
import { Line } from 'react-chartjs-2';

import useStyles from './styles';
import getChartData from '../../../requests/ethPriceHistoryFetch';
import calculateHighAndLows from '../../../utils/calculateHighsAndLows'

const data = {
    labels: [-5, -4, -3, -2, -1, 0],
    datasets: [
      {
        label: "Support",
        data: [22000, 22500, 50000, 41000, 44000, 65000],
        fill: true,
        backgroundColor: "rgba(131, 195, 247, 0.4)",
        borderColor: "#2196f3"
      },
    ]
  };

const PriceChart = ({outerStateData, outerStateFunc}) => {
    const classes = useStyles();
    const [chartData, setChartData] = useState(data);


    useEffect(()=>{
      getChartData().then(response=>{
        let aray = [];
        for (let i = 48; i > 0; i--) {
          aray.push(-i+'h');
        }
        let samples = [];     
        response['prices'].forEach((e)=>{
          samples.push(e[1]);
        })
        let dnt = calculateHighAndLows(samples);
        let dntTmp = outerStateData;
        dntTmp.datasets[0].data = [dnt.h, dnt.l];
        console.log(dntTmp);
        outerStateFunc(dntTmp);

        const tmpData = {
          labels: aray,
          datasets: [
            {
              label: "Support",
              data: samples.reverse(),
              fill: true,
              backgroundColor: "rgba(131, 195, 247, 0.4)",
              borderColor: "#2196f3"
            },
          ]
        };

        console.log(tmpData);
        setChartData(tmpData);
      });
    }, []);


    return (
        <div>
            <Grid container spacing={2} alignItems="center" justify="flex-start"> 
                <Grid item xs={12}>       
                    <ButtonGroup className={classes.btnGr2nd} color='primary'>
                        <Button size="small">Price</Button>
                        {/*<Button size="small">Market Cap</Button>
                        <Button size="small">24h volume</Button>*/}
                    </ButtonGroup>
                </Grid>
                <Grid item xs={12}>                
                    <Line data={chartData} />
                </Grid>
          </Grid>
        </div>
    )
}

export default PriceChart
