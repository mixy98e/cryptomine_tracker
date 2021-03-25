import React, { useState, useEffect } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@material-ui/core'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import useStyles from './styles'
import getCoinsDetailData from '../../../requests/coinsDataFetch';

function createData(name, tag, price, d, athchg, marketcap, supply) {
    return { name, tag, price, d, athchg, marketcap, supply };
  }

const rows = [
    createData("Bitcoin", 'BTC', '56,635.52', 5.81, 11.54, '1,060,029,504,764', '18,654,862 BTC'),
    createData("Ethereum", 'ETC', '1,796.15', 4.17, 2.02, '206,446,000,973', '115,064,005 ETH'),
    ];

const CoinTable = () => {
    const classes = useStyles();
    const [tableData, setTableData] = useState(rows);

    useEffect(() => {
        getCoinsDetailData().then(response => {
            const coinArr = [];
            response.forEach(el => {
                coinArr.push(createData(el['name'], 
                el['symbol'], 
                el['current_price'], 
                el['price_change_percentage_24h'],
                el['ath_change_percentage'],
                el['market_cap'],
                el['circulating_supply']))                
            });
            setTableData(coinArr);
        })
    }, []);


    return (
            <TableContainer component={Paper} className={classes.table}>
                <Table aria-label='dense profit table' stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{fontWeight: 'bold'}}>Name</TableCell>
                            <TableCell align='right' style={{fontWeight: 'bold'}}>Tag</TableCell>
                            <TableCell align='right' style={{fontWeight: 'bold'}}>Price</TableCell>
                            <TableCell align='right' style={{fontWeight: 'bold'}}>24h %</TableCell>
                            <TableCell align='right' style={{fontWeight: 'bold'}}>ATH chg.%</TableCell>
                            <TableCell align='right' style={{fontWeight: 'bold'}}>Market Cap</TableCell>
                            <TableCell align='right' style={{fontWeight: 'bold'}}>Supply</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableData.map((row)=> (
                        <TableRow key={row.name}>
                            <TableCell>{row.name}</TableCell>
                            <TableCell align='right' style={{fontWeight: 'bold'}}>{row.tag.toUpperCase()}</TableCell>
                            <TableCell align='right' style={{fontWeight: 'bold'}}>${row.price.toLocaleString()}</TableCell>
                            <TableCell align='center'>
                                {row.d > 0 ? 
                                            <ArrowDropUpIcon style={{color: '#00e676', fontSize: 18}} /> :
                                            <ArrowDropDownIcon style={{fontSize: 18}} color='secondary' />}
                                {row.d.toFixed(2)}%
                            </TableCell>
                            <TableCell align='center'>
                                {row.athchg > 0 ? 
                                            <ArrowDropUpIcon style={{color: '#00e676', fontSize: 18}} /> :
                                            <ArrowDropDownIcon style={{fontSize: 18}} color='secondary' />}
                                {row.athchg.toFixed(2)}%
                            </TableCell>
                            <TableCell align='right'>${row.marketcap.toLocaleString()}</TableCell>
                            <TableCell align='right'>{row.supply}</TableCell>
                        </TableRow>   
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
    )
}

export default CoinTable
