import React from 'react';

export default function DetailCell() {
    return (
        <div>
            {/* <Table size="small" aria-label="purchases">
                                    <TableBody>
                                        {row.history.map((historyRow) => (
                                            <StyledTableRow key={historyRow.date}>
                                                <StyledTableCell component="th" scope="row">
                                                    {historyRow.date}
                                                </StyledTableCell>
                                                <StyledTableCell>{historyRow.customerId}</StyledTableCell>
                                                <StyledTableCell align="right">{historyRow.amount}</StyledTableCell>
                                                <StyledTableCell align="right">
                                                    {Math.round(historyRow.amount * row.price * 100) / 100}
                                                </StyledTableCell>
                                            </StyledTableRow>
                                        ))}
                                    </TableBody>                                </Table> */}
            {/* <TableHead>
                <StyledTableRow>
                    <StyledTableCell>Date</StyledTableCell>
                    <StyledTableCell>Customer</StyledTableCell>
                    <StyledTableCell align="right">Amount</StyledTableCell>
                    <StyledTableCell align="right">Total price ($)</StyledTableCell>
                </StyledTableRow>
            </TableHead> */}
        </div>
    );
}
