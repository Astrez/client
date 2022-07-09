import React, { useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { Form, Formik } from 'formik';
import { useTheme } from '@mui/material/styles';

import Schema from './schema';
import useScriptRef from 'hooks/useScriptRef';
import { Box } from '@mui/system';
import { CircularProgress, Divider, FormHelperText, Grid } from '@mui/material';
import AnimatedButton from 'ui-component/form/button/animated';
import FormInput from 'ui-component/form/input';
import FileUpload from './FileUpload';
import axios from 'axios';
import CustomSnackBar from 'ui-component/snackbar';
export default function CreateDeploymentFile() {
    const [formSubmission, setFormSubmission] = useState({});
    const scriptedRef = useScriptRef();
    const theme = useTheme();
    const handleSubmit = async (values) => {
        const config = {
            headers: {
                'Content-type': 'multipart/form-data'
            },
            data: values,
            method: 'POST',
            url: 'http://127.0.0.1:5000/api/deployment/upload'
        };
        const response = await axios(config);
        console.log(response.data);
        setFormSubmission({
            message: response.data.status,
            type: 'info'
        });
    };
    return (
        <MainCard title="Create Deployment">
            <Formik
                initialValues={Schema.initialValues}
                onSubmit={async (values, { setStatus, setSubmitting, setErrors }) => {
                    try {
                        if (scriptedRef.current) {
                            setStatus({ success: true });
                            await handleSubmit(values);
                            setSubmitting(false);
                        }
                    } catch (err) {
                        console.error(err);
                        if (scriptedRef.current) {
                            setStatus({ success: false });
                            setErrors({ submit: err.message });
                            setSubmitting(false);
                        }
                    }
                }}
                validationSchema={Schema.validationSchema}
            >
                {({ errors, handleBlur, handleChange, isSubmitting, touched, values, setFieldValue }) => {
                    return (
                        <Form>
                            <CustomSnackBar
                                open={formSubmission.message ? true : false}
                                handleClose={() => {
                                    setFormSubmission({});
                                }}
                                message={formSubmission.message}
                                type="info"
                            />
                            <Box>
                                <Grid container spacing={3} justifyContent="center" alignItems="center">
                                    <Grid item xs={12}>
                                        <FormInput
                                            touched={touched && `${touched.namespace}`}
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
                                    <Grid item xs={12}>
                                        <Box sx={{ width: '100%', textAlign: 'center' }}>
                                            <FileUpload
                                                title={'Upload Deployment YAML File'}
                                                handleChange={(e) => {
                                                    console.log(e);
                                                    setFieldValue('deployment', e.currentTarget.files[0]);
                                                }}
                                                error={errors && errors.deployment}
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FileUpload
                                            title={'Upload Service YAML File'}
                                            handleChange={(e) => {
                                                setFieldValue('service', e.currentTarget.files[0]);
                                            }}
                                            error={errors && errors.service}
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                            {errors.submit && (
                                <Box sx={{ mt: 3, textAlignLast: 'center' }}>
                                    <FormHelperText error>{errors.submit}</FormHelperText>
                                </Box>
                            )}
                            <Box>
                                <Box sx={{ mt: 3, mb: 3 }}>
                                    <Divider />
                                </Box>
                                <Grid container justifyContent="center" alignItems="center">
                                    <Box xs={6} item sx={{ mt: 2, width: '50%', textAlign: 'center', maxWidth: '300px' }}>
                                        <AnimatedButton
                                            fullWidth
                                            disableElevation
                                            disabled={isSubmitting}
                                            type="submit"
                                            size="large"
                                            variant="contained"
                                            color="secondary"
                                            title={'Start Deployment'}
                                        />
                                    </Box>
                                </Grid>
                                <Grid container justifyContent="center" alignItems="center">
                                    {isSubmitting && <CircularProgress size={24} />}
                                </Grid>
                            </Box>
                        </Form>
                    );
                }}
            </Formik>
        </MainCard>
    );
}
