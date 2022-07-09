import { Grid, Table, TableBody, TableHead, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import AnimatedButton from 'ui-component/form/button/animated';
import StyledTableCell from 'ui-component/table/StyledTableCell';
import StyledTableRow from 'ui-component/table/StyledTableRow';
import { useDispatch } from 'react-redux';
import { deleteDeployment, editImage, editReplicas } from 'store/actions/deploymentActions';
import CustomDialog from './container-image';

export default function DetailCell({ containers, name, namespace }) {
    const [selectedContainer, setSelectedContainer] = React.useState(null);

    const dispatch = useDispatch();
    console.log('rendering');
    const handleDelete = () => {
        const data = { name, namespace };
        dispatch(deleteDeployment(data));
    };
    const handleEditReplicas = () => {
        const data = { name, namespace, replicas: 1 };
        dispatch(editReplicas(data));
    };
    const handleEditImage = () => {
        const data = { name, namespace, containerName: selectedContainer.containerName, containerImage: selectedContainer.containerImage };
        dispatch(editImage(data));
        setSelectedContainer(null);
    };

    return (
        <>
            {selectedContainer && (
                <CustomDialog
                    open={selectedContainer !== null}
                    handleClose={() => {
                        setSelectedContainer(null);
                    }}
                    container={selectedContainer}
                    setSelectedContainer={setSelectedContainer}
                    value={selectedContainer.containerImage}
                    handleSubmit={handleEditImage}
                />
            )}

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                        <AnimatedButton
                            onClick={handleDelete}
                            disableElevation
                            size="medium"
                            variant="contained"
                            color="error"
                            title="Delete"
                        />
                        <AnimatedButton
                            onClick={handleEditReplicas}
                            disableElevation
                            size="medium"
                            variant="contained"
                            color="info"
                            title="Edit Replicas"
                        />
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{ textAlign: 'center', mt: 2, mb: 2 }}>
                        <Typography variant="h4" component="h3">
                            Containers
                        </Typography>
                    </Box>
                    <Table size="small" aria-label="purchases">
                        <TableHead>
                            <StyledTableRow>
                                <StyledTableCell>Container Name</StyledTableCell>
                                <StyledTableCell>Container Image</StyledTableCell>
                                <StyledTableCell align="left">Limits</StyledTableCell>
                                <StyledTableCell align="left">Requests</StyledTableCell>
                                <StyledTableCell align="left">Action</StyledTableCell>
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
                                        <StyledTableCell align="left">{container.limits}</StyledTableCell>
                                        <StyledTableCell align="left">{container.requests}</StyledTableCell>
                                        <StyledTableCell align="left">
                                            <AnimatedButton
                                                onClick={() => {
                                                    setSelectedContainer(container);
                                                }}
                                                disableElevation
                                                size="small"
                                                variant="contained"
                                                color="inherit"
                                                title="Edit Image"
                                            />
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                        </TableBody>
                    </Table>
                </Grid>
            </Grid>
        </>
    );
}
