// action - state management
import { FETCH_ERROR, FETCH_PODS, REPLACE_REPLICAS } from 'store/constant';
export const initialState = {
    podDetails: [],
    error: undefined
};

// ==============================|| CUSTOMIZATION REDUCER ||============================== //

const customizationReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PODS:
            return {
                ...state,
                podDetails: action.payload,
                error: null
            };
        case FETCH_ERROR:
            return {
                ...state,
                podDetails: [],
                error: action.payload.message
            };

        default:
            return state;
    }
};

export default customizationReducer;
