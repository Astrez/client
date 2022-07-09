import React from 'react';
import { Card } from '@mui/material';
import AnimatedButton from 'ui-component/form/button/animated';

export default function FileUpload({ title }) {
    return (
        <Card style={{ textAlign: 'center' }}>
            <AnimatedButton
                fullWidth
                disableElevation
                size="large"
                type="submit"
                variant="contained"
                color="secondary"
                title={title}
                component="label"
            >
                <input type="file" hidden />
            </AnimatedButton>
        </Card>
    );
}
