import { useState } from 'react';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Form, Formik } from 'formik';

// project imports
import { Step, StepLabel, Stepper, CircularProgress, Grid, Divider } from '@mui/material';
import { Box } from '@mui/system';
import Schema from './schema';
import useScriptRef from 'hooks/useScriptRef';
import AnimatedButton from 'ui-component/form/button/animated';
import DeploymentDetails from './DeploymentDetails';
import ServiceDetails from './ServiceDetails';

// ==============================|| Create Deployment Page ||============================== //

const CreateDeploymentForm = ({ ...others }) => {
    const theme = useTheme();
    const scriptedRef = useScriptRef();

    const [activeStep, setActiveStep] = useState(0);
    const steps = ['Deployment Details', 'Service Details'];
    const isLastStep = activeStep === steps.length - 1;
    const currentValidationSchema = Schema.createDeploymentSchema[activeStep];
    function _handleBack() {
        setActiveStep(activeStep - 1);
    }
    const handleSubmit = (values) => {
        console.log(values);
    };

    return (
        <MainCard title="Create Deployment">
            <Box sx={{ mt: 3, mb: 5, ml: 2, mr: 2 }}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label) => (
                        <Step
                            key={label}
                            sx={{
                                '& .MuiStepLabel-root .Mui-completed': {
                                    color: 'secondary.dark' // circle color (COMPLETED)
                                },
                                '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel': {
                                    color: 'grey.500' // Just text label (COMPLETED)
                                },
                                '& .MuiStepLabel-root .Mui-active': {
                                    color: 'secondary.main' // circle color (ACTIVE)
                                },
                                '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel': {
                                    color: 'common.white' // Just text label (ACTIVE)
                                }
                            }}
                        >
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>
            <Formik
                initialValues={Schema.initialValues}
                onSubmit={(values, { setStatus, setSubmitting, setErrors }) => {
                    try {
                        if (scriptedRef.current) {
                            setStatus({ success: true });
                            if (isLastStep) {
                                handleSubmit(values);
                            } else {
                                setActiveStep(activeStep + 1);
                            }
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
                }}
                validationSchema={currentValidationSchema}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => {
                    return (
                        <Form>
                            {activeStep === 0 ? (
                                <DeploymentDetails
                                    theme={theme}
                                    handleSubmit={handleSubmit}
                                    errors={errors}
                                    handleBlur={handleBlur}
                                    handleChange={handleChange}
                                    isSubmitting={isSubmitting}
                                    touched={touched}
                                    values={values}
                                />
                            ) : activeStep === 1 ? (
                                <ServiceDetails
                                    theme={theme}
                                    handleSubmit={handleSubmit}
                                    errors={errors}
                                    handleBlur={handleBlur}
                                    handleChange={handleChange}
                                    isSubmitting={isSubmitting}
                                    touched={touched}
                                    values={values}
                                />
                            ) : (
                                <>Error</>
                            )}
                            <Box sx={{ mt: 3, mb: 3 }}>
                                <Divider />
                            </Box>
                            <Grid container justifyContent="center" alignItems="center">
                                {activeStep !== 0 && (
                                    <Grid item xs={6}>
                                        <Box sx={{ mt: 2, width: '50%', textAlign: 'center', maxWidth: '300px' }}>
                                            <AnimatedButton
                                                fullWidth
                                                disableElevation
                                                onClick={_handleBack}
                                                variant="contained"
                                                color="secondary"
                                                title="Back"
                                            />
                                        </Box>
                                    </Grid>
                                )}
                                <Box xs={6} item sx={{ mt: 2, width: '50%', textAlign: 'center', maxWidth: '300px' }}>
                                    <AnimatedButton
                                        fullWidth
                                        disableElevation
                                        disabled={isSubmitting}
                                        type="submit"
                                        size="large"
                                        variant="contained"
                                        color="secondary"
                                        title={isLastStep ? 'Start Deployment' : 'Next'}
                                    />
                                </Box>
                            </Grid>
                            <Grid container justifyContent="center" alignItems="center">
                                {isSubmitting && <CircularProgress size={24} />}
                            </Grid>
                        </Form>
                    );
                }}
            </Formik>
        </MainCard>
    );
};

export default CreateDeploymentForm;
