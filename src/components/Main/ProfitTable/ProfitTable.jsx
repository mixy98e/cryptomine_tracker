import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@material-ui/core'

import useStyles from './styles'

function createData(name, rev, cost, profit) {
    return { name, rev, cost, profit };
  }

const rows = [
    createData("hour", 159.0, 9.0, 150.0),
    createData("day", 237.0, 17.0, 220.0),
    createData("month", 262.0, 16.0, 146.0),
    createData("custom", 305.0, 3.7, 301.3)
  ];


const ProfitTable = () => {
    const classes = useStyles();
    
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
                     <TableRow key={row.name} className={row.name==='custom' && classes.custom}>
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
