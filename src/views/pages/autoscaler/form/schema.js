import * as Yup from 'yup';

const initialValues = { scaleFactor: '', autoScale: 'N' };
const replaceReplicaForm = Yup.object().shape({
    scaleFactor: Yup.number().min(0.01).max(1).required('Scaling Factor is required'),
    autoScale: Yup.string().min(1).max(1).required('AutoScale is required')
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    replaceReplicaForm,
    initialValues
};
