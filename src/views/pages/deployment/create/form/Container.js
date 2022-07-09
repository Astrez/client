import React from 'react';
import Accordion from './Accordion';
import AccordionSummary from './AccordionSummary';
import AccordionDetails from './AccordionDetails';
import { Grid, Typography, Button } from '@mui/material';
import FormInput from 'ui-component/form/input';

function Container({ container, errors, touched, theme, values, handleBlur, handleChange, selectedItem, onChange, id, onDelete }) {
    console.log('Rendering');
    const defaultErrors = {
        containerName: '',
        containerImage: '',
        cpuResourceLimit: '',
        cpuResourceRequest: '',
        memoryResourceLimit: '',
        memoryResourceRequest: '',
        containerPort: ''
    };
    const error = errors.containers
        ? errors.containers.find((_, index) => index === id)
            ? errors.containers.find((_, index) => index === id)
            : defaultErrors
        : defaultErrors;
    const touch = touched.containers
        ? touched.containers.find((_, index) => index === id)
        : {
              containerName: 'false',
              containerImage: 'false',
              cpuResourceLimit: 'false',
              cpuResourceRequest: 'false',
              memoryResourceLimit: 'false',
              memoryResourceRequest: 'false',
              containerPort: 'false'
          };
    return (
        <Grid item sx={{ mt: 2 }}>
            <Accordion expanded={selectedItem} onChange={onChange}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>Container #{id}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container>
                        <Grid item xs={12}>
                            <FormInput
                                touched={touch.containerName ? touch.containerName : 'false'}
                                error={error.containerName ? error.containerName : ''}
                                theme={theme}
                                value={values.containers[id].containerName}
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                                type={'text'}
                                name={`containers.${id}.containerName`}
                                title={'Container Name'}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormInput
                                touched={touch.containerImage ? touch.containerImage : 'false'}
                                error={error.containerImage ? error.containerImage : ''}
                                theme={theme}
                                value={values.containers[id].containerImage}
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                                type={'text'}
                                name={`containers.${id}.containerImage`}
                                title={'Container Image'}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormInput
                                touched={touch.cpuResourceRequest ? touch.cpuResourceRequest : 'false'}
                                error={error.cpuResourceRequest ? error.cpuResourceRequest : ''}
                                theme={theme}
                                value={values.containers[id].cpuResourceRequest}
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                                type={'number'}
                                name={`containers.${id}.cpuResourceRequest`}
                                title={'CPU Resource Request'}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormInput
                                touched={touch.memoryResourceRequest ? touch.memoryResourceRequest : 'false'}
                                error={error.memoryResourceRequest ? error.memoryResourceRequest : ''}
                                theme={theme}
                                value={values.containers[id].memoryResourceRequest}
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                                type={'number'}
                                name={`containers.${id}.memoryResourceRequest`}
                                title={'Memory Resource Request'}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormInput
                                touched={touch.cpuResourceLimit ? touch.cpuResourceLimit : 'false'}
                                error={error.cpuResourceLimit ? error.cpuResourceLimit : ''}
                                theme={theme}
                                value={values.containers[id].cpuResourceLimit}
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                                type={'number'}
                                name={`containers.${id}.cpuResourceLimit`}
                                title={'CPU Resource Limit'}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormInput
                                touched={touch.memoryResourceLimit ? touch.memoryResourceLimit : 'false'}
                                error={error.memoryResourceLimit ? error.memoryResourceLimit : ''}
                                theme={theme}
                                value={values.containers[id].memoryResourceLimit}
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                                type={'number'}
                                name={`containers.${id}.memoryResourceLimit`}
                                title={'Memory Resource Limit'}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormInput
                                touched={touch.containerPort ? touch.containerPort : 'false'}
                                error={error.containerPort ? error.containerPort : ''}
                                theme={theme}
                                value={values.containers[id].containerPort}
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                                type={'number'}
                                name={`containers.${id}.containerPort`}
                                title={'Container Port'}
                            />
                        </Grid>
                        <Grid item xs={12} sx={{ alignSelf: 'right' }}>
                            {id !== 0 && (
                                <Button fullWidth variant="contained" color="error" onClick={onDelete}>
                                    Delete
                                </Button>
                            )}
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </Grid>
    );
}
export default Container;
