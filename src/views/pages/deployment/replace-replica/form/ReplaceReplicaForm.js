import React from 'react';

import { useTheme } from '@mui/material/styles';
// material-ui
import { Box, FormHelperText, Grid } from '@mui/material';

// third party
import { useFormik } from 'formik';

//project imports
import useScriptRef from 'hooks/useScriptRef';
import FormInput from 'ui-component/form/input';
import AnimatedButton from 'ui-component/form/button/animated';
import Schema from './schema';

export default function ReplaceReplicaForm({ handleSubmit, ...others }) {
    const scriptedRef = useScriptRef();
    const theme = useTheme();
    const formik = useFormik({
        initialValues: Schema.initialValues,
        onSubmit: (values, { setStatus, setSubmitting, setErrors }) => {
            console.log(values);
            try {
                if (scriptedRef.current) {
                    setStatus({ success: true });
                    handleSubmit(values);
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
        },
        validationSchema: Schema.replaceReplicaForm
    });

    return (
        <form noValidate onSubmit={formik.handleSubmit} {...others}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Grid container spacing={0.5} direction="row" justifyContent="center" alignItems="center">
                        <Grid item xs={4}>
                            <FormInput
                                touched={formik.touched.deploymentName}
                                error={formik.errors.deploymentName}
                                theme={theme}
                                value={formik.values.deploymentName}
                                handleBlur={formik.handleBlur}
                                handleChange={formik.handleChange}
                                type={'text'}
                                name={'deploymentName'}
                                title={'Deployment Name'}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <FormInput
                                touched={formik.touched.deploymentNamespace}
                                error={formik.errors.deploymentNamespace}
                                theme={theme}
                                value={formik.values.deploymentNamespace}
                                handleBlur={formik.handleBlur}
                                handleChange={formik.handleChange}
                                type={'text'}
                                name={'deploymentNamespace'}
                                title={'Deployment Namespace'}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <FormInput
                                touched={formik.touched.replicas}
                                error={formik.errors.replicas}
                                theme={theme}
                                value={formik.values.replicas}
                                handleBlur={formik.handleBlur}
                                handleChange={formik.handleChange}
                                type={'text'}
                                name={'replicas'}
                                title={'Replicas'}
                            />
                        </Grid>
                    </Grid>
                </Grid>

                {formik.errors.submit && (
                    <Grid item xs={4}>
                        <Box sx={{ mt: 3 }}>
                            <FormHelperText error>{formik.errors.submit}</FormHelperText>
                        </Box>
                    </Grid>
                )}
                <Grid container justifyContent="center" alignItems="center">
                    <Box sx={{ mt: 2, width: '50%', textAlign: 'center', maxWidth: '300px' }}>
                        <AnimatedButton
                            fullWidth
                            disableElevation
                            disabled={formik.isSubmitting}
                            size="large"
                            type="submit"
                            variant="contained"
                            color="secondary"
                            title="Submit"
                        />
                    </Box>
                </Grid>
            </Grid>
        </form>
    );
}
