import React from 'react';
import { IconButton, Collapse, Box } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DetailCell from './DetailCell';
import StyledTableRow from 'ui-component/table/StyledTableRow';
import StyledTableCell from 'ui-component/table/StyledTableCell';

export default function CustomRow(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <StyledTableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <StyledTableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                    {row.name}
                </StyledTableCell>
                <StyledTableCell align="left">{row.namespace}</StyledTableCell>
                <StyledTableCell align="right">{row.revision}</StyledTableCell>
                <StyledTableCell align="right">{row.replicas}</StyledTableCell>
                <StyledTableCell align="right">{row.numberOfContainers}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <DetailCell containers={row.containers} name={row.name} namespace={row.namespace} />
                        </Box>
                    </Collapse>
                </StyledTableCell>
            </StyledTableRow>
        </>
    );
}
