import React from 'react';
// material-ui
import { FormControl, FormHelperText, InputLabel, OutlinedInput } from '@mui/material';
export default function FormInput({ touched, theme, value, handleBlur, handleChange, error, title, type, name, ...others }) {
    return (
        <FormControl fullWidth error={Boolean(touched && error)} sx={{ ...theme.typography.customInput }}>
            <InputLabel htmlFor={`outlined-adornment-${name}`}>{title}</InputLabel>
            <OutlinedInput
                id={`outlined-adornment-${name}`}
                type={type}
                touched={touched}
                value={value}
                name={name}
                onBlur={handleBlur}
                onChange={handleChange}
                label={title}
                inputProps={{}}
                {...others}
            />
            {touched && error && (
                <FormHelperText error id="standard-weight-helper-text">
                    {error}
                </FormHelperText>
            )}
        </FormControl>
    );
}
