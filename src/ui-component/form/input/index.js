import React from 'react';
// material-ui
import { FormControl, FormHelperText, InputLabel, OutlinedInput } from '@mui/material';
export default function FormInput({ theme, value, handleBlur, handleChange, error, title, type, name }) {
    return (
        <FormControl fullWidth error={Boolean(error)} sx={{ ...theme.typography.customInput }}>
            <InputLabel htmlFor={`outlined-adornment-${name}`}>{title}</InputLabel>
            <OutlinedInput
                id={`outlined-adornment-${name}`}
                type={type}
                value={value}
                name={name}
                onBlur={handleBlur}
                onChange={handleChange}
                label={title}
                inputProps={{}}
            />
            {error && (
                <FormHelperText error id="standard-weight-helper-text">
                    {error}
                </FormHelperText>
            )}
        </FormControl>
    );
}
