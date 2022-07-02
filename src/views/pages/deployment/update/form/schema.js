import * as Yup from 'yup';

const initialValues = { deploymentName: '', deploymentNamespace: '', containerImage: '' };
const replaceReplicaForm = Yup.object().shape({
    deploymentName: Yup.string().min(3).max(255).required('Deployment Name is required'),
    deploymentNamespace: Yup.string().min(3).max(255).required('Deployment Namespace is required'),
    containerImage: Yup.string().min(3).max(255).required('Container Image is required')
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    replaceReplicaForm,
    initialValues
};
