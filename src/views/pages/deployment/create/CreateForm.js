import React, { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, FormHelperText, Grid, MenuItem, InputLabel, Select, Button, FormControl, Divider } from '@mui/material';

// third party
import { useFormik } from 'formik';
import { v4 as uuid } from 'uuid';

//project imports
import useScriptRef from 'hooks/useScriptRef';
import FormInput from 'ui-component/form/input';
import AnimatedButton from 'ui-component/form/button/animated';
import Schema from './schema';

export default function CreateForm({ handleSubmit, ...others }) {
    const scriptedRef = useScriptRef();
    const theme = useTheme();
    const formik = useFormik({
        initialValues: {
            fields: Schema.initialValues
        },
        onSubmit: async (values, { setErrors, setStatus, setSubmitting }) => {
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
        formik.setFieldValue('fields', [...formik.values.fields, { id: uuid(), name: '', value: '' }]);
    };

    const handleRemoveField = (id) => {
        formik.setFieldValue(
            'fields',
            formik.values.fields.filter((field) => field.id !== id)
        );
    };
    const [select, setSelect] = useState('');
    return (
        <form noValidate onSubmit={formik.handleSubmit} {...others}>
            <Grid container spacing={2}>
                {formik.values.fields.map((field, id) => {
                    return (
                        <Grid item xs={4} key={id}>
                            <FormInput
                                touched={formik.touched[field.name]}
                                error={formik.errors[field.name]}
                                theme={theme}
                                value={formik.values.fields.deploymentName}
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
                                <Select value={select} onClick={() => {}} onChange={() => {}}>
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={'field1'}>Field 1</MenuItem>
                                    <MenuItem value={'field2'}>Field 2</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={2}>
                            <Box>
                                <Button variant="contained" color="secondary">
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
