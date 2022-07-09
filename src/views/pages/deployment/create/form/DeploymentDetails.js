import React, { useState } from 'react';

import { Box, FormHelperText, Grid, Typography } from '@mui/material';
import { FieldArray } from 'formik';
import { useTheme } from '@mui/material/styles';

//project imports
import FormInput from 'ui-component/form/input';
import AnimatedButton from 'ui-component/form/button/animated';
import Container from './Container';

export default function DeploymentDetails({ handleSubmit, errors, handleBlur, handleChange, isSubmitting, touched, values, ...others }) {
    const theme = useTheme();
    const [selectedItem, setSelectedItem] = useState(0);
    return (
        <>
            <Grid container>
                <Grid item xs={12}>
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
                                    value={'deployment'}
                                    type={'text'}
                                    name={'kind'}
                                    title={'Kind'}
                                    disabled={true}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormInput
                                    touched={touched && touched.namespace}
                                    error={errors && errors.namespace}
                                    theme={theme}
                                    value={values.namespace}
                                    handleBlur={handleBlur}
                                    handleChange={handleChange}
                                    type={'text'}
                                    name={'namespace'}
                                    title={'Namespace'}
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
                                        touched={touched && touched.deploymentName}
                                        error={errors && errors.deploymentName}
                                        theme={theme}
                                        value={values.deploymentName}
                                        handleBlur={handleBlur}
                                        handleChange={handleChange}
                                        type={'text'}
                                        name={'deploymentName'}
                                        title={'Deployment Name'}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormInput
                                        touched={touched.label}
                                        error={errors.label}
                                        theme={theme}
                                        value={values.label}
                                        handleBlur={handleBlur}
                                        handleChange={handleChange}
                                        type={'text'}
                                        name={'label'}
                                        title={'Label'}
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Box>
                        <Box sx={{ mb: 2 }}>
                            <Typography variant="h2" component="h3">
                                Specification:
                            </Typography>
                        </Box>
                        <Box>
                            <Grid container>
                                <Grid item xs={12}>
                                    <FormInput
                                        touched={touched.replicas}
                                        error={errors.replicas}
                                        theme={theme}
                                        value={values.replicas}
                                        handleBlur={handleBlur}
                                        handleChange={handleChange}
                                        type={'number'}
                                        name={'replicas'}
                                        title={'Replicas'}
                                    />
                                </Grid>
                                <Box sx={{ mt: 1, mb: 1, width: '100%' }}>
                                    <Box sx={{ mb: 2 }}>
                                        <Typography variant="h2" component="h3">
                                            Selectors:
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Grid>
                                            <FormInput
                                                disabled
                                                touched={'false'}
                                                error={''}
                                                theme={theme}
                                                value={values.label}
                                                handleBlur={handleBlur}
                                                handleChange={handleChange}
                                                type={'text'}
                                                name={'label'}
                                                title={'Label'}
                                            />
                                        </Grid>
                                    </Box>
                                    <Box sx={{ mb: 2, mt: 2 }}>
                                        <Typography variant="h2" component="h3">
                                            Template:
                                        </Typography>
                                    </Box>
                                    <Box sx={{ mb: 1, mt: 1, ml: 4 }}>
                                        <Typography variant="h3" component="h3">
                                            Meta Data:
                                        </Typography>
                                    </Box>
                                    <Box sx={{ mb: 1, mt: 1 }}>
                                        <Grid>
                                            <FormInput
                                                disabled
                                                touched={'false'}
                                                error={''}
                                                theme={theme}
                                                value={values.label}
                                                handleBlur={handleBlur}
                                                handleChange={handleChange}
                                                type={'text'}
                                                name={'label'}
                                                title={'Label'}
                                            />
                                        </Grid>
                                    </Box>
                                </Box>
                            </Grid>
                        </Box>
                        <Box>
                            <Box sx={{ mb: 1, mt: 1 }}>
                                <Typography variant="h2" component="h3">
                                    Spec:
                                </Typography>
                            </Box>
                            <Box sx={{ mb: 1, mt: 1 }}>
                                <Typography variant="h2" component="h3">
                                    Containers:
                                </Typography>
                                <FieldArray
                                    name="containers"
                                    render={(arrayHelpers) => {
                                        const containers = values.containers;
                                        return (
                                            <>
                                                {containers &&
                                                    containers.map((container, index) => (
                                                        <Container
                                                            key={index}
                                                            container={container}
                                                            selectedItem={selectedItem === index}
                                                            theme={theme}
                                                            touched={touched}
                                                            errors={errors}
                                                            values={values}
                                                            handleBlur={handleBlur}
                                                            handleChange={handleChange}
                                                            onChange={() => {
                                                                if (selectedItem === index) setSelectedItem(-1);
                                                                else setSelectedItem(index);
                                                            }}
                                                            onDelete={() => {
                                                                arrayHelpers.remove(index);
                                                            }}
                                                            id={index}
                                                        />
                                                    ))}
                                                <Grid container justifyContent="center" alignItems="center">
                                                    <Box sx={{ mt: 2, width: '20%', textAlign: 'center', maxWidth: '300px' }}>
                                                        <AnimatedButton
                                                            fullWidth
                                                            disableElevation
                                                            onClick={() => {
                                                                arrayHelpers.push({
                                                                    containerImage: '',
                                                                    containerName: '',
                                                                    cpuResourceRequest: 0,
                                                                    memoryResourceRequest: 0,
                                                                    cpuResourceLimit: 0,
                                                                    memoryResourceLimit: 0,
                                                                    containerPort: 3000
                                                                });
                                                                // setSelectedItem(containers.length);
                                                            }}
                                                            size="large"
                                                            variant="contained"
                                                            color="secondary"
                                                            title="Add Container"
                                                        />
                                                    </Box>
                                                </Grid>
                                            </>
                                        );
                                    }}
                                />
                            </Box>
                        </Box>
                    </Box>

                    {errors.submit && (
                        <Grid item xs={4}>
                            <Box sx={{ mt: 3 }}>
                                <FormHelperText error>{errors.submit}</FormHelperText>
                            </Box>
                        </Grid>
                    )}
                </Grid>
            </Grid>
        </>
    );
}
