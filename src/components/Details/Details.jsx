import React from 'react'
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core'
import { Line } from 'react-chartjs-2'

import useStyles from './styles'

import PriceChart from './PriceChart/PriceChart';

const Details = () => {
    const classes = useStyles();

    return (
        <Card>
        <CardHeader title={'Current stats:'} />
        <CardContent>
            {/* Router which will decide what will be shown in Details card*/}
            <PriceChart />
        </CardContent>
      </Card>
    )
}

export default Details
