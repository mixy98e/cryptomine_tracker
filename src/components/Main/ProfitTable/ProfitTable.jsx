import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@material-ui/core'

import useStyles from './styles'
import useFetch from '../../../context/useFetch'


const ProfitTable = () => {
    const classes = useStyles();
    const { clacResult }=useFetch();//testing
    const rows= clacResult ? clacResult : [];    

    return (
        <TableContainer component={Paper} className={classes.tablecnt}>
            <Table size='small' aria-label='dense profit table'>
                <TableHead>
                    <TableRow>
                        <TableCell style={{fontWeight: 'bold'}}>Period</TableCell>
                        <TableCell align='right' style={{fontWeight: 'bold'}}>Revenue</TableCell>
                        <TableCell align='right' style={{fontWeight: 'bold'}}>Cost</TableCell>
                        <TableCell align='right' style={{fontWeight: 'bold'}}>Profit</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row)=> (
                     <TableRow key={row.name} className={row.name==='custom'? classes.custom : ''}>
                         <TableCell>{row.name}</TableCell>
                         <TableCell align='right'>${row.rev}</TableCell>
                         <TableCell align='right' className={classes.bad}>${row.cost}</TableCell>
                         <TableCell align='right' className={classes.good}>${row.profit}</TableCell>
                     </TableRow>   
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ProfitTable
