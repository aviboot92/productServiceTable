import React from 'react';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white
    },
    body: {
        fontSize: 14
    }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover
        }
    }
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700
    }
});

export default function DialogTable(props) {
    const classes = useStyles();

    return (
        <div data-testid="dialogTable">
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">Avg&nbsp;(%)</StyledTableCell>
                            <StyledTableCell align="center">Serial&nbsp;(No.)</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props
                            .data
                            .map((row) => (
                                <StyledTableRow key={row.serialNumber}>
                                    <StyledTableCell align="center">{Math.round(row.avgDailyDischarge * 100)}</StyledTableCell>
                                    <StyledTableCell align="center">{row.serialNumber}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
