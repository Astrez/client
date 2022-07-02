import React from 'react';
import { Card } from '@mui/material';
import AnimatedButton from 'ui-component/form/button/animated';

export default function FileUpload() {
    return (
        <Card style={{ textAlign: 'center' }}>
            <AnimatedButton
                fullWidth
                disableElevation
                size="large"
                type="submit"
                variant="contained"
                color="secondary"
                title="Upload YAML File"
                component="label"
            >
                <input type="file" hidden />
            </AnimatedButton>
        </Card>
    );
}
