import { v4 as uuid } from 'uuid';
// action - state management
import { ADD_ITEM, REMOVE_ITEM } from 'store/constant';
export const initialState = {
    startDeploymentOptions: [
        { id: uuid(), name: 'deploymentName', value: '', label: 'Deployment Name' },
        { id: uuid(), name: 'containerName', value: '', label: 'Container Name' },
        { id: uuid(), name: 'containerImage', value: '', label: 'Container Image' },
        { id: uuid(), name: 'deploymentNamespace', value: '', label: 'Deployment Namespace' },
        { id: uuid(), name: 'port', value: '', label: 'Port', type: 'number' },
        { id: uuid(), name: 'target', value: '', label: 'Target' },
        { id: uuid(), name: 'replicas', value: '', label: 'Replicas' }
    ]
};

// ==============================|| CUSTOMIZATION REDUCER ||============================== //

const customizationReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state
            };
        case REMOVE_ITEM:
            return { ...state };
        default:
            return state;
    }
};

export default customizationReducer;
