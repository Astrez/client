import React from 'react';
import { Grid } from '@mui/material';
import CreateForm from './CreateForm';

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
            </Grid>
        </>
    );
}
