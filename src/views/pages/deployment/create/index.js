import React from 'react';
import MainCard from 'ui-component/cards/MainCard';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Button, Divider, Grid } from '@mui/material';
import { Box } from '@mui/system';
import AnimatedButton from 'ui-component/form/button/animated';
import { useNavigate } from 'react-router-dom';
export default function CreateDeployment() {
    const theme = useTheme();
    const navigate = useNavigate();
    const handleOnUseForm = () => {
        navigate('/deployment/create/form');
    };
    const handleOnFileUpload = () => {
        navigate('/deployment/create/file');
    };
    return (
        <MainCard title="Create Deployment">
            <Grid container justifyContent={'center'}>
                <Grid item>
                    <AnimatedButton
                        fullWidth
                        onClick={handleOnUseForm}
                        disableElevation
                        type="submit"
                        size="large"
                        variant="contained"
                        color="secondary"
                        title={'Use Form'}
                    />
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
                                fontWeight: 500
                            }}
                            disableRipple
                            disabled
                        >
                            OR
                        </Button>

                        <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                    </Box>
                </Grid>
                <Grid item>
                    <AnimatedButton
                        fullWidth
                        disableElevation
                        onClick={handleOnFileUpload}
                        size="large"
                        variant="contained"
                        color="secondary"
                        title={'Use File Upload'}
                    />
                </Grid>
            </Grid>
        </MainCard>
    );
}
