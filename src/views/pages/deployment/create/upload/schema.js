import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    namespace: Yup.string().min(3).max(255),
    deployment: Yup.mixed()
        .test(
            'FILE_FORMAT',
            'Uploaded file has unsupported format. Need a YAML File.',
            (value) => !value || (value && value.type === 'application/x-yaml')
        )
        .required('Deployment File is required'),
    service: Yup.mixed()
        .test(
            'FILE_FORMAT',
            'Uploaded file has unsupported format. Need a YAML File.',
            (value) => !value || (value && value.type === 'application/x-yaml')
        )
        .required('Service File is required')
});
const initialValues = {
    namespace: 'default'
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    validationSchema,
    initialValues
};
