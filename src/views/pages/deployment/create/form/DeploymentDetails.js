import React from 'react';
import { Box, Divider, Button, Grid } from '@mui/material';
import CreateForm from './CreateForm';
import FileUpload from '../FileUpload';

export default function DeploymentDetails({
    theme,
    handleSubmit,
    errors,
    handleBlur,
    handleChange,
    isSubmitting,
    touched,
    values,
    ...others
}) {
    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <CreateForm
                        handleSubmit={handleSubmit}
                        errors={errors}
                        handleBlur={handleBlur}
                        handleChange={handleChange}
                        isSubmitting={isSubmitting}
                        touched={touched}
                        values={values}
                        {...others}
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
            </Grid>
            <Grid container justifyContent={'center'}>
                <Grid item>
                    <FileUpload title={'Upload YAML file for Deployment'} />
                </Grid>
            </Grid>
        </>
    );
}
