import React from 'react';
import { Snackbar, Alert as MuiAlert } from '@mui/material';
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function CustomSnackBar({ vertical = 'top', horizontal = 'right', open, handleClose, message, type }) {
    return (
        <Snackbar anchorOrigin={{ vertical, horizontal }} open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    );
}
