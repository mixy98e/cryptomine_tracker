import React, {useContext} from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@material-ui/core'

import useStyles from './styles'
import { MineCalculatorContext } from '../../../context/context'


const ProfitTable = () => {
    const {profitTable} = useContext(MineCalculatorContext);
    const classes = useStyles();
    const rows=profitTable;

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
