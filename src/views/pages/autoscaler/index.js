import React from 'react';
import AutoScaleForm from './form/AutoScaleForm';

import { useTheme } from '@mui/material/styles';
import MainCard from 'ui-component/cards/MainCard';
import { Grid, Box, Divider, Button } from '@mui/material';
import FileUpload from './form/FileUpload';
const AutoScale = () => {
    const theme = useTheme();
    const handleSubmit = (values) => {
        console.log(values);
    };
    return (
        <MainCard title="Autoscaler">
            <Grid container>
                <Grid item xs={12}>
                    <AutoScaleForm handleSubmit={handleSubmit} />
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
            </Grid>
            <Grid container justifyContent={'center'}>
                <Grid item>
                    <FileUpload />
                </Grid>
            </Grid>
        </MainCard>
    );
};
export default AutoScale;
