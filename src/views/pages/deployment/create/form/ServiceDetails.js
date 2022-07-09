import React, { useState } from 'react';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button, Divider, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';

//project imports
import FormInput from 'ui-component/form/input';
import FileUpload from '../FileUpload';
export default function ServiceDetails({ errors, handleBlur, handleChange, isSubmitting, touched, values, ...others }) {
    const theme = useTheme();
    return (
        <>
            <Box sx={{ mb: 5 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <FormInput
                            touched={'false'}
                            error={null}
                            theme={theme}
                            value={'apps/v1'}
                            type={'text'}
                            name={'apiVersion'}
                            title={'API Version'}
                            disabled={true}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormInput
                            touched={'false'}
                            error={null}
                            theme={theme}
                            value={'Service'}
                            type={'text'}
                            name={'kind'}
                            title={'Kind'}
                            disabled={true}
                        />
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Box sx={{ mb: 2 }}>
                    <Typography variant="h2" component="h3">
                        Meta Data:
                    </Typography>
                </Box>
                <Box>
                    <Grid container>
                        <Grid item xs={12}>
                            <FormInput
                                touched={touched && touched.serviceName}
                                error={errors && errors.serviceName}
                                theme={theme}
                                value={values.serviceName}
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                                type={'text'}
                                name={'serviceName'}
                                title={'Service Name'}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Box>
                <Box sx={{ mb: 2 }}>
                    <Typography variant="h2" component="h3">
                        Spec:
                    </Typography>
                </Box>
                <Box>
                    <Grid container>
                        <Grid item xs={12}>
                            <FormInput
                                disabled={true}
                                theme={theme}
                                value={values.containers[0].containerPort}
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                                type={'number'}
                                name={'port'}
                                title={'Port'}
                            />
                        </Grid>{' '}
                        <Grid item xs={12}>
                            <FormInput
                                disabled={true}
                                touched={touched.protocol}
                                error={errors.protocol}
                                theme={theme}
                                value={values.protocol}
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                                type={'text'}
                                name={'protocol'}
                                title={'Protocol'}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormInput
                                disabled={true}
                                theme={theme}
                                value={values.containers[0].containerPort}
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                                type={'number'}
                                name={'protocol'}
                                title={'Target Port'}
                            />
                        </Grid>
                        <Box sx={{ mt: 1, mb: 1, width: '100%' }}>
                            <Box sx={{ mb: 2 }}>
                                <Typography variant="h2" component="h3">
                                    Selectors:
                                </Typography>
                            </Box>
                            <Box sx={{ ml: 4 }}>
                                <Typography variant="h3" component="h3">
                                    Label(app): {values.label}
                                </Typography>
                            </Box>
                            <Box sx={{ mt: 3, display: 'flex', width: '100%' }}>
                                <Box sx={{ mt: 1 }}>
                                    <Typography variant="h3" component="h3">
                                        Type:
                                    </Typography>
                                </Box>
                                <Box sx={{ width: '30%', ml: 3 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Type</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="type"
                                            name="type"
                                            value={values.type}
                                            label="Type"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={'LoadBalancer'}>LoadBalancer</MenuItem>
                                            <MenuItem value={'ClusterIP'}>ClusterIP</MenuItem>
                                            <MenuItem value={'NodePort'}>NodePort</MenuItem>
                                            <MenuItem value={'ExternalName'}>ExternalName</MenuItem>
                                        </Select>
                                        {touched.type && errors.type && (
                                            <FormHelperText error id="standard-weight-helper-text">
                                                {errors.type}
                                            </FormHelperText>
                                        )}
                                    </FormControl>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Box>
            </Box>
            <Grid container justifyContent={'center'}>
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
                    <FileUpload title="Upload YAML file for Service" />
                </Grid>
            </Grid>

            {errors.submit && (
                <Grid item xs={4}>
                    <Box sx={{ mt: 3 }}>
                        <FormHelperText error>{errors.submit}</FormHelperText>
                    </Box>
                </Grid>
            )}
        </>
    );
}
