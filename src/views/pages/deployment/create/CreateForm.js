import React, { useState, useEffect } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, FormHelperText, Grid, MenuItem, InputLabel, Select, Button, FormControl, Divider } from '@mui/material';

// third party
import { useFormik } from 'formik';

//project imports
import useScriptRef from 'hooks/useScriptRef';
import FormInput from 'ui-component/form/input';
import AnimatedButton from 'ui-component/form/button/animated';
import Schema from './schema';

export default function CreateForm({ handleSubmit, ...others }) {
    const scriptedRef = useScriptRef();
    const theme = useTheme();
    let optionList = Schema.optionList;
    const [customOptionList, setCustomOptionList] = useState([]);
    const formik = useFormik({
        initialValues: {
            fields: Schema.initialValues
        },
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
        validationSchema: Schema.createDeploymentSchema
    });

    const handleAddField = () => {
        if (selectedItem === '') return;
        const currentSelection = optionList.find((option) => option.name === selectedItem);
        optionList = optionList.map((option) => {
            if (option.name === selectedItem) option.isSelected = true;
            return option;
        });
        setCustomOptionList([...customOptionList, currentSelection]);
        setSelectedItem('');
        formik.setFieldValue('fields', [...formik.values.fields, currentSelection]);
    };

    const handleRemoveField = (id) => {
        formik.setFieldValue(
            'fields',
            formik.values.fields.filter((field) => field.id !== id)
        );
    };
    const handleOnSelectedItemChange = (event) => {
        const {
            target: { value }
        } = event;
        if (value === '') return;
        setSelectedItem(value);
    };
    const [selectedItem, setSelectedItem] = useState('');
    return (
        <form noValidate onSubmit={formik.handleSubmit} {...others}>
            <Grid container spacing={2}>
                {formik.values.fields.map((field, id) => {
                    console.log(field);
                    let error = formik.errors[field.name];
                    console.log(error);

                    return (
                        <Grid item xs={4} key={id}>
                            <FormInput
                                error={error}
                                theme={theme}
                                value={formik.values.fields[field.name]}
                                handleBlur={formik.handleBlur}
                                handleChange={formik.handleChange}
                                type={field.type || 'text'}
                                name={field.name}
                                title={field.label || 'None'}
                            />
                        </Grid>
                    );
                })}
                <Grid item xs={12}>
                    <Grid container spacing={0.5} direction="row" justifyContent="center" alignItems="center">
                        <Grid item xs={4}>
                            <FormControl fullWidth>
                                <InputLabel id="open-select-item">Item List</InputLabel>
                                <Select
                                    labelId="open-select-item"
                                    id="demo-simple-select"
                                    value={selectedItem}
                                    label="Item List"
                                    onChange={handleOnSelectedItemChange}
                                >
                                    {optionList.map((option) => (
                                        <MenuItem disabled={option.isSelected} key={option.id} value={option.name}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={2}>
                            <Box>
                                <Button onClick={handleAddField} variant="contained" color="secondary">
                                    Add
                                </Button>
                            </Box>
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
                    <Box sx={{ mt: 2, width: '50%' }}>
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
