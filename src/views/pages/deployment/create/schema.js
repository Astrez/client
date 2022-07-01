import * as Yup from 'yup';
import { v4 as uuid } from 'uuid';

const optionList = [
    { id: uuid(), name: 'deploymentName1', value: '', label: 'Deployment Name', isSelected: false },
    { id: uuid(), name: 'containerName1', value: '', label: 'Container Name', isSelected: false },
    { id: uuid(), name: 'containerImage1', value: '', label: 'Container Image', isSelected: false },
    { id: uuid(), name: 'deploymentNamespace1', value: '', label: 'Deployment Namespace', isSelected: false },
    { id: uuid(), name: 'port1', value: '', label: 'Port', type: 'number', isSelected: false },
    { id: uuid(), name: 'target1', value: '', label: 'Target', isSelected: false },
    { id: uuid(), name: 'replicas1', value: '', label: 'Replicas', isSelected: false }
];

const createDeploymentSchema = Yup.object().shape({
    deploymentName: Yup.string().min(3).max(255).required('Deployment Name is required'),
    containerName: Yup.string().min(3).max(255).required('Container Name is required'),
    containerImage: Yup.string().min(3).max(255).required('Container Image is required'),
    deploymentNamespace: Yup.string().min(3).max(255).required('Deployment Namespace is required'),
    port: Yup.number().min(3).max(255).required('Port is required'),
    target: Yup.string().min(3).max(255).required('Target is required'),
    replicas: Yup.string().min(3).max(255).required('Replicas is required')
});
const initialValues = [
    { id: uuid(), name: 'deploymentName', value: '', label: 'Deployment Name' },
    { id: uuid(), name: 'containerName', value: '', label: 'Container Name' },
    { id: uuid(), name: 'containerImage', value: '', label: 'Container Image' },
    { id: uuid(), name: 'deploymentNamespace', value: '', label: 'Deployment Namespace' },
    { id: uuid(), name: 'port', value: '', label: 'Port', type: 'number' },
    { id: uuid(), name: 'target', value: '', label: 'Target' },
    { id: uuid(), name: 'replicas', value: '', label: 'Replicas' }
];

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    createDeploymentSchema,
    initialValues,
    optionList
};
