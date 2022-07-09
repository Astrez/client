import React from 'react';
import { Card, FormHelperText } from '@mui/material';
import AnimatedButton from 'ui-component/form/button/animated';

export default function FileUpload({ title, handleChange, error }) {
    return (
        <Card style={{ textAlign: 'center' }}>
            <AnimatedButton fullWidth disableElevation size="large" variant="contained" color="secondary" title={title} component="label">
                <input type="file" hidden onChange={handleChange} />
            </AnimatedButton>
            {error && (
                <FormHelperText error id="standard-weight-helper-text">
                    {error}
                </FormHelperText>
            )}
        </Card>
    );
}
