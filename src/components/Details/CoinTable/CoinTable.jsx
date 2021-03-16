import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@material-ui/core'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import useStyles from './styles'

function createData(name, tag, price, d, dd, marketcap, supply) {
    return { name, tag, price, d, dd, marketcap, supply };
  }

const rows = [
    createData("Bitcoin", 'BTC', '56,635.52', 5.81, 11.54, '1,060,029,504,764', '18,654,862 BTC'),
    createData("Ethereum", 'ETC', '1,796.15', 4.17, 2.02, '206,446,000,973', '115,064,005 ETH'),
    createData("Dodge", 'DOGE', '1,796.15', 4.17, 2.02, '206,446,000,973', '115,064,005 ETH'),
    createData("Binance Coin",  'BNB', '1,796.15', 4.17, 2.02, '206,446,000,973', '115,064,005 ETH'),
    createData("Uniswap", 'UNI', '1,796.15', 4.17, 2.02, '206,446,000,973', '115,064,005 ETH'),
    createData("Stellar", 'XLM', '1,796.15', 4.17, 2.02, '206,446,000,973', '115,064,005 ETH'),
  ];

const CoinTable = () => {
    const classes = useStyles();

    return (
            <TableContainer component={Paper} className={classes.table}>
                <Table aria-label='dense profit table' stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{fontWeight: 'bold'}}>Name</TableCell>
                            <TableCell align='right' style={{fontWeight: 'bold'}}>Tag</TableCell>
                            <TableCell align='right' style={{fontWeight: 'bold'}}>Price</TableCell>
                            <TableCell align='right' style={{fontWeight: 'bold'}}>24h %</TableCell>
                            <TableCell align='right' style={{fontWeight: 'bold'}}>7d %</TableCell>
                            <TableCell align='right' style={{fontWeight: 'bold'}}>Market Cap</TableCell>
                            <TableCell align='right' style={{fontWeight: 'bold'}}>Supply</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row)=> (
                        <TableRow key={row.name}>
                            <TableCell>{row.name}</TableCell>
                            <TableCell align='right' style={{fontWeight: 'bold'}}>{row.tag}</TableCell>
                            <TableCell align='right' style={{fontWeight: 'bold'}}>${row.price}</TableCell>
                            <TableCell align='center'>
                                <ArrowDropUpIcon style={{color: '#00e676', fontSize: 18}} />
                                {row.d}%
                            </TableCell>
                            <TableCell align='center'>
                                <ArrowDropDownIcon style={{fontSize: 18}} color='secondary' />
                                {row.dd}%
                            </TableCell>
                            <TableCell align='right'>${row.marketcap}</TableCell>
                            <TableCell align='right'>${row.supply}</TableCell>
                        </TableRow>   
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
    )
}

export default CoinTable
