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
    label: Yup.string().min(3).max(255).required('Label is required'),
    replicas: Yup.number().min(1).max(3).required('Replicas is required'),
    containers: Yup.array()
        .of(
            Yup.object().shape({
                containerImage: Yup.string().min(3, 'Must have at least 3 Characters').max(255).required('Container Image is Required'),
                containerName: Yup.string().min(3, 'Must have at least 3 Characters').max(255).required('Container Name is Required'),
                cpuResourceRequest: Yup.number().min(1, 'Minimum value is 1').max(100).required('CPU Resource Requested is Required'),
                memoryResourceRequest: Yup.number().min(1, 'Minimum value is 1').max(100).required('Memory Resource Requested is Required'),
                cpuResourceLimit: Yup.number().min(1, 'Minimum value is 1').max(100).required('CPU Resource Limit is Required'),
                memoryResourceLimit: Yup.number().min(1, 'Minimum value is 1').max(100).required('CPU Resource Limit is Required'),
                containerPort: Yup.number().min(1000, 'Minimum value is 1000').max(9999).required('Container Port is Required')
            })
        )
        .min(1)
        .max(3)
        .required('At Least one container is Required')
});
const initialValues = {
    deploymentName: '',
    label: '',
    replicas: '',
    containers: [
        {
            containerImage: '',
            containerName: '',
            cpuResourceRequest: 0,
            memoryResourceRequest: 0,
            cpuResourceLimit: 0,
            memoryResourceLimit: 0,
            containerPort: 3000
        }
    ]
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    createDeploymentSchema,
    initialValues,
    optionList
};
