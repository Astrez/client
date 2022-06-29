import React from 'react';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { Button } from '@mui/material';
export default function AnimatedButton({ disabled, size, type, variant, color, title, children, ...others }) {
    return (
        <AnimateButton>
            <Button disableElevation {...others} disabled={disabled} size={size} type={type} variant={variant} color={color}>
                {title}
                {children}
            </Button>
        </AnimateButton>
    );
}
