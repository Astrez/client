// action - state management
import { DELETE_DEPLOYMENT, EDIT_IMAGE, FETCH_DEPLOYMENTS, FETCH_ERROR, REPLACE_REPLICAS } from 'store/constant';
export const initialState = {
    deployments: [],
    error: undefined
};

// ==============================|| CUSTOMIZATION REDUCER ||============================== //

const customizationReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DEPLOYMENTS:
            return {
                ...state,
                deployments: action.payload,
                error: null
            };
        case FETCH_ERROR:
            return {
                ...state,
                deployments: [],
                error: action.payload.message
            };
        case DELETE_DEPLOYMENT:
            return {
                ...state
            };
        case REPLACE_REPLICAS:
            return {
                ...state
            };
        case EDIT_IMAGE:
            return {
                ...state
            };
        default:
            return state;
    }
};

export default customizationReducer;
