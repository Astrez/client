import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Divider, Button, Grid } from '@mui/material';

// project imports
import FileUpload from './FileUpload';
import CreateForm from './CreateForm';

// ==============================|| Create Deployment Page ||============================== //

const CreateDeployment = ({ ...others }) => {
    const theme = useTheme();
    const customization = useSelector((state) => state.customization);
    const handleSubmit = (values) => {
        console.log(values);
    };

    return (
        <MainCard title="Create Deployment">
            <Grid container>
                <Grid item xs={12}>
                    <CreateForm handleSubmit={handleSubmit} {...others} />
                </Grid>
                <Grid item xs={12}>
                    <Box
                        sx={{
                            alignItems: 'center',
                            display: 'flex'
                        }}
                    >
                        <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />

                        <Button
                            variant="outlined"
                            sx={{
                                cursor: 'unset',
                                m: 2,
                                py: 0.5,
                                px: 7,
                                borderColor: `${theme.palette.grey[100]} !important`,
                                color: `${theme.palette.grey[900]}!important`,
                                fontWeight: 500,
                                borderRadius: `${customization.borderRadius}px`
                            }}
                            disableRipple
                            disabled
                        >
                            OR
                        </Button>

                        <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                    </Box>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item>
                    <FileUpload />
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default CreateDeployment;
