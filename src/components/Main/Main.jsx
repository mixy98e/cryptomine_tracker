import React from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider} from '@material-ui/core';

import useStyles from './styles';

import Form from './Form/Form';
import ProfitTable from './ProfitTable/ProfitTable'

const Main = () => {
    const classes = useStyles();
    
    return (
        <Card className={classes.root} style={{height: '80%'}}>
            <CardHeader title="CryptoMine Tracker" subheader="Powered by FreeCryptoAPI" />
            <CardContent>
                <Typography align='center' variant='h5'>Mining calculator</Typography>
                <Typography className={classes.subtitle} align='center' variant="subtitle1">
                    Enter the fata for calculating you're mining profit in certain period.
                </Typography>
                <Divider />
                <Form />                
                <Divider />
                <ProfitTable />
                {/*doghnut chart* it will switch view with table*/}
            </CardContent>
        </Card>
    )
}

export default Main
