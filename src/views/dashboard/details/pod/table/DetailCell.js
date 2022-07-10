import { Table, TableBody, TableHead } from '@mui/material';
import React from 'react';
import StyledTableCell from 'ui-component/table/StyledTableCell';
import StyledTableRow from 'ui-component/table/StyledTableRow';

export default function DetailCell({ containers }) {
    return (
        <>
            <Table size="medium" aria-label="podDetails">
                <TableHead>
                    <StyledTableRow>
                        <StyledTableCell>Container Name</StyledTableCell>
                        <StyledTableCell>Container Image</StyledTableCell>
                        <StyledTableCell align="right">Limits</StyledTableCell>
                        <StyledTableCell align="right">Requests</StyledTableCell>
                    </StyledTableRow>
                </TableHead>
                <TableBody>
                    {containers &&
                        containers.map((container) => (
                            <StyledTableRow key={container.containerName}>
                                <StyledTableCell component="th" scope="row">
                                    {container.containerName}
                                </StyledTableCell>
                                <StyledTableCell>{container.containerImage}</StyledTableCell>
                                <StyledTableCell align="right">{container.limits}</StyledTableCell>
                                <StyledTableCell align="right">{container.requests}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                </TableBody>
            </Table>
        </>
    );
}
